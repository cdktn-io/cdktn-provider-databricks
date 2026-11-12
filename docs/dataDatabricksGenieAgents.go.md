# `dataDatabricksGenieAgents` Submodule <a name="`dataDatabricksGenieAgents` Submodule" id="@cdktn/provider-databricks.dataDatabricksGenieAgents"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksGenieAgents <a name="DataDatabricksGenieAgents" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents databricks_genie_agents}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgents(scope Construct, id *string, config DataDatabricksGenieAgentsConfig) DataDatabricksGenieAgents
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig">DataDatabricksGenieAgentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig">DataDatabricksGenieAgentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.resetView">ResetView</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksGenieAgentsProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig">DataDatabricksGenieAgentsProviderConfig</a>

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.resetPageSize"></a>

```go
func ResetPageSize()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetView` <a name="ResetView" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.resetView"></a>

```go
func ResetView()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksGenieAgents resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.DataDatabricksGenieAgents_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.DataDatabricksGenieAgents_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.DataDatabricksGenieAgents_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.DataDatabricksGenieAgents_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksGenieAgents resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksGenieAgents to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksGenieAgents that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksGenieAgents to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.genieAgents">GenieAgents</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList">DataDatabricksGenieAgentsGenieAgentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference">DataDatabricksGenieAgentsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.pageSizeInput">PageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.viewInput">ViewInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.pageSize">PageSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.view">View</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `GenieAgents`<sup>Required</sup> <a name="GenieAgents" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.genieAgents"></a>

```go
func GenieAgents() DataDatabricksGenieAgentsGenieAgentsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList">DataDatabricksGenieAgentsGenieAgentsList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksGenieAgentsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference">DataDatabricksGenieAgentsProviderConfigOutputReference</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.pageSizeInput"></a>

```go
func PageSizeInput() *f64
```

- *Type:* *f64

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ViewInput`<sup>Optional</sup> <a name="ViewInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.viewInput"></a>

```go
func ViewInput() *string
```

- *Type:* *string

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.pageSize"></a>

```go
func PageSize() *f64
```

- *Type:* *f64

---

##### `View`<sup>Required</sup> <a name="View" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.view"></a>

```go
func View() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksGenieAgentsConfig <a name="DataDatabricksGenieAgentsConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

&datadatabricksgenieagents.DataDatabricksGenieAgentsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	PageSize: *f64,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig,
	View: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.pageSize">PageSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#page_size DataDatabricksGenieAgents#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig">DataDatabricksGenieAgentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#provider_config DataDatabricksGenieAgents#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.view">View</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#view DataDatabricksGenieAgents#view}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.pageSize"></a>

```go
PageSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#page_size DataDatabricksGenieAgents#page_size}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksGenieAgentsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig">DataDatabricksGenieAgentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#provider_config DataDatabricksGenieAgents#provider_config}.

---

##### `View`<sup>Optional</sup> <a name="View" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.view"></a>

```go
View *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#view DataDatabricksGenieAgents#view}.

---

### DataDatabricksGenieAgentsGenieAgents <a name="DataDatabricksGenieAgentsGenieAgents" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

&datadatabricksgenieagents.DataDatabricksGenieAgentsGenieAgents {
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#name DataDatabricksGenieAgents#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig">DataDatabricksGenieAgentsGenieAgentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#provider_config DataDatabricksGenieAgents#provider_config}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#name DataDatabricksGenieAgents#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksGenieAgentsGenieAgentsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig">DataDatabricksGenieAgentsGenieAgentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#provider_config DataDatabricksGenieAgents#provider_config}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinition <a name="DataDatabricksGenieAgentsGenieAgentsDefinition" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

&datadatabricksgenieagents.DataDatabricksGenieAgentsGenieAgentsDefinition {
	Benchmarks: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks,
	Config: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig,
	DataSources: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources,
	Instructions: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.property.benchmarks">Benchmarks</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#benchmarks DataDatabricksGenieAgents#benchmarks}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.property.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig">DataDatabricksGenieAgentsGenieAgentsDefinitionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#config DataDatabricksGenieAgents#config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.property.dataSources">DataSources</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#data_sources DataDatabricksGenieAgents#data_sources}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.property.instructions">Instructions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instructions DataDatabricksGenieAgents#instructions}. |

---

##### `Benchmarks`<sup>Optional</sup> <a name="Benchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.property.benchmarks"></a>

```go
Benchmarks DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#benchmarks DataDatabricksGenieAgents#benchmarks}.

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.property.config"></a>

```go
Config DataDatabricksGenieAgentsGenieAgentsDefinitionConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig">DataDatabricksGenieAgentsGenieAgentsDefinitionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#config DataDatabricksGenieAgents#config}.

---

##### `DataSources`<sup>Optional</sup> <a name="DataSources" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.property.dataSources"></a>

```go
DataSources DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#data_sources DataDatabricksGenieAgents#data_sources}.

---

##### `Instructions`<sup>Optional</sup> <a name="Instructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.property.instructions"></a>

```go
Instructions DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instructions DataDatabricksGenieAgents#instructions}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

&datadatabricksgenieagents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks {
	Questions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks.property.questions">Questions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#questions DataDatabricksGenieAgents#questions}. |

---

##### `Questions`<sup>Optional</sup> <a name="Questions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks.property.questions"></a>

```go
Questions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#questions DataDatabricksGenieAgents#questions}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

&datadatabricksgenieagents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions {
	Id: *string,
	Question: *string,
	Answer: interface{},
	EvaluationNote: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.property.question">Question</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#question DataDatabricksGenieAgents#question}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.property.answer">Answer</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#answer DataDatabricksGenieAgents#answer}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.property.evaluationNote">EvaluationNote</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#evaluation_note DataDatabricksGenieAgents#evaluation_note}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Question`<sup>Required</sup> <a name="Question" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.property.question"></a>

```go
Question *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#question DataDatabricksGenieAgents#question}.

---

##### `Answer`<sup>Optional</sup> <a name="Answer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.property.answer"></a>

```go
Answer interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#answer DataDatabricksGenieAgents#answer}.

---

##### `EvaluationNote`<sup>Optional</sup> <a name="EvaluationNote" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.property.evaluationNote"></a>

```go
EvaluationNote *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#evaluation_note DataDatabricksGenieAgents#evaluation_note}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

&datadatabricksgenieagents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer {
	Content: *string,
	Format: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer.property.content">Content</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#content DataDatabricksGenieAgents#content}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer.property.format">Format</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#format DataDatabricksGenieAgents#format}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer.property.content"></a>

```go
Content *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#content DataDatabricksGenieAgents#content}.

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer.property.format"></a>

```go
Format *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#format DataDatabricksGenieAgents#format}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionConfig <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

&datadatabricksgenieagents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig {
	SampleQuestions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig.property.sampleQuestions">SampleQuestions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sample_questions DataDatabricksGenieAgents#sample_questions}. |

---

##### `SampleQuestions`<sup>Optional</sup> <a name="SampleQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig.property.sampleQuestions"></a>

```go
SampleQuestions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sample_questions DataDatabricksGenieAgents#sample_questions}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

&datadatabricksgenieagents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions {
	Id: *string,
	Question: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions.property.question">Question</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#question DataDatabricksGenieAgents#question}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Question`<sup>Required</sup> <a name="Question" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions.property.question"></a>

```go
Question *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#question DataDatabricksGenieAgents#question}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

&datadatabricksgenieagents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources {
	McpConnections: interface{},
	Tables: interface{},
	Volumes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources.property.mcpConnections">McpConnections</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#mcp_connections DataDatabricksGenieAgents#mcp_connections}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources.property.tables">Tables</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#tables DataDatabricksGenieAgents#tables}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources.property.volumes">Volumes</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#volumes DataDatabricksGenieAgents#volumes}. |

---

##### `McpConnections`<sup>Optional</sup> <a name="McpConnections" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources.property.mcpConnections"></a>

```go
McpConnections interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#mcp_connections DataDatabricksGenieAgents#mcp_connections}.

---

##### `Tables`<sup>Optional</sup> <a name="Tables" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources.property.tables"></a>

```go
Tables interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#tables DataDatabricksGenieAgents#tables}.

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources.property.volumes"></a>

```go
Volumes interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#volumes DataDatabricksGenieAgents#volumes}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

&datadatabricksgenieagents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections {
	McpConnection: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections.property.mcpConnection">McpConnection</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#mcp_connection DataDatabricksGenieAgents#mcp_connection}. |

---

##### `McpConnection`<sup>Required</sup> <a name="McpConnection" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections.property.mcpConnection"></a>

```go
McpConnection *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#mcp_connection DataDatabricksGenieAgents#mcp_connection}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

&datadatabricksgenieagents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables {
	Identifier: *string,
	ColumnConfigs: interface{},
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables.property.identifier">Identifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables.property.columnConfigs">ColumnConfigs</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#column_configs DataDatabricksGenieAgents#column_configs}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}. |

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}.

---

##### `ColumnConfigs`<sup>Optional</sup> <a name="ColumnConfigs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables.property.columnConfigs"></a>

```go
ColumnConfigs interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#column_configs DataDatabricksGenieAgents#column_configs}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

&datadatabricksgenieagents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs {
	Column: *string,
	Description: *string,
	DisplayName: *string,
	EnableEntityMatching: interface{},
	EnableFormatAssistance: interface{},
	Exclude: interface{},
	Synonyms: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.column">Column</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#column DataDatabricksGenieAgents#column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.enableEntityMatching">EnableEntityMatching</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#enable_entity_matching DataDatabricksGenieAgents#enable_entity_matching}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.enableFormatAssistance">EnableFormatAssistance</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#enable_format_assistance DataDatabricksGenieAgents#enable_format_assistance}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.exclude">Exclude</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#exclude DataDatabricksGenieAgents#exclude}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.synonyms">Synonyms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.column"></a>

```go
Column *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#column DataDatabricksGenieAgents#column}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}.

---

##### `EnableEntityMatching`<sup>Optional</sup> <a name="EnableEntityMatching" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.enableEntityMatching"></a>

```go
EnableEntityMatching interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#enable_entity_matching DataDatabricksGenieAgents#enable_entity_matching}.

---

##### `EnableFormatAssistance`<sup>Optional</sup> <a name="EnableFormatAssistance" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.enableFormatAssistance"></a>

```go
EnableFormatAssistance interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#enable_format_assistance DataDatabricksGenieAgents#enable_format_assistance}.

---

##### `Exclude`<sup>Optional</sup> <a name="Exclude" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.exclude"></a>

```go
Exclude interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#exclude DataDatabricksGenieAgents#exclude}.

---

##### `Synonyms`<sup>Optional</sup> <a name="Synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.synonyms"></a>

```go
Synonyms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

&datadatabricksgenieagents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes {
	Path: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#path DataDatabricksGenieAgents#path}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#path DataDatabricksGenieAgents#path}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

&datadatabricksgenieagents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions {
	ExampleQuestionSqls: interface{},
	JoinSpecs: interface{},
	SqlFunctions: interface{},
	SqlSnippets: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets,
	TextInstructions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.exampleQuestionSqls">ExampleQuestionSqls</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#example_question_sqls DataDatabricksGenieAgents#example_question_sqls}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.joinSpecs">JoinSpecs</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#join_specs DataDatabricksGenieAgents#join_specs}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.sqlFunctions">SqlFunctions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql_functions DataDatabricksGenieAgents#sql_functions}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.sqlSnippets">SqlSnippets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql_snippets DataDatabricksGenieAgents#sql_snippets}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.textInstructions">TextInstructions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#text_instructions DataDatabricksGenieAgents#text_instructions}. |

---

##### `ExampleQuestionSqls`<sup>Optional</sup> <a name="ExampleQuestionSqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.exampleQuestionSqls"></a>

```go
ExampleQuestionSqls interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#example_question_sqls DataDatabricksGenieAgents#example_question_sqls}.

---

##### `JoinSpecs`<sup>Optional</sup> <a name="JoinSpecs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.joinSpecs"></a>

```go
JoinSpecs interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#join_specs DataDatabricksGenieAgents#join_specs}.

---

##### `SqlFunctions`<sup>Optional</sup> <a name="SqlFunctions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.sqlFunctions"></a>

```go
SqlFunctions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql_functions DataDatabricksGenieAgents#sql_functions}.

---

##### `SqlSnippets`<sup>Optional</sup> <a name="SqlSnippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.sqlSnippets"></a>

```go
SqlSnippets DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql_snippets DataDatabricksGenieAgents#sql_snippets}.

---

##### `TextInstructions`<sup>Optional</sup> <a name="TextInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.textInstructions"></a>

```go
TextInstructions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#text_instructions DataDatabricksGenieAgents#text_instructions}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

&datadatabricksgenieagents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls {
	Id: *string,
	Question: *string,
	Sql: *string,
	Parameters: interface{},
	UsageGuidance: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.question">Question</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#question DataDatabricksGenieAgents#question}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.sql">Sql</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.parameters">Parameters</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#parameters DataDatabricksGenieAgents#parameters}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.usageGuidance">UsageGuidance</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#usage_guidance DataDatabricksGenieAgents#usage_guidance}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Question`<sup>Required</sup> <a name="Question" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.question"></a>

```go
Question *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#question DataDatabricksGenieAgents#question}.

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.sql"></a>

```go
Sql *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.parameters"></a>

```go
Parameters interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#parameters DataDatabricksGenieAgents#parameters}.

---

##### `UsageGuidance`<sup>Optional</sup> <a name="UsageGuidance" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.usageGuidance"></a>

```go
UsageGuidance *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#usage_guidance DataDatabricksGenieAgents#usage_guidance}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

&datadatabricksgenieagents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters {
	Name: *string,
	DefaultValue: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue,
	Description: *string,
	TypeHint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#name DataDatabricksGenieAgents#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.property.defaultValue">DefaultValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#default_value DataDatabricksGenieAgents#default_value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.property.typeHint">TypeHint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#type_hint DataDatabricksGenieAgents#type_hint}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#name DataDatabricksGenieAgents#name}.

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.property.defaultValue"></a>

```go
DefaultValue DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#default_value DataDatabricksGenieAgents#default_value}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}.

---

##### `TypeHint`<sup>Optional</sup> <a name="TypeHint" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.property.typeHint"></a>

```go
TypeHint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#type_hint DataDatabricksGenieAgents#type_hint}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

&datadatabricksgenieagents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue {
	ValueRange: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.valueRange">ValueRange</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#value_range DataDatabricksGenieAgents#value_range}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#values DataDatabricksGenieAgents#values}. |

---

##### `ValueRange`<sup>Optional</sup> <a name="ValueRange" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.valueRange"></a>

```go
ValueRange DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#value_range DataDatabricksGenieAgents#value_range}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#values DataDatabricksGenieAgents#values}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

&datadatabricksgenieagents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange {
	Max: *string,
	Min: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.max">Max</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#max DataDatabricksGenieAgents#max}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.min">Min</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#min DataDatabricksGenieAgents#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.max"></a>

```go
Max *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#max DataDatabricksGenieAgents#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.min"></a>

```go
Min *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#min DataDatabricksGenieAgents#min}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

&datadatabricksgenieagents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs {
	Id: *string,
	Left: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft,
	Right: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight,
	Sql: *string,
	Comment: *string,
	Instruction: *string,
	RelationshipType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.left">Left</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#left DataDatabricksGenieAgents#left}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.right">Right</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#right DataDatabricksGenieAgents#right}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.sql">Sql</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#comment DataDatabricksGenieAgents#comment}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.instruction">Instruction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.relationshipType">RelationshipType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#relationship_type DataDatabricksGenieAgents#relationship_type}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Left`<sup>Required</sup> <a name="Left" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.left"></a>

```go
Left DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#left DataDatabricksGenieAgents#left}.

---

##### `Right`<sup>Required</sup> <a name="Right" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.right"></a>

```go
Right DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#right DataDatabricksGenieAgents#right}.

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.sql"></a>

```go
Sql *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#comment DataDatabricksGenieAgents#comment}.

---

##### `Instruction`<sup>Optional</sup> <a name="Instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.instruction"></a>

```go
Instruction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}.

---

##### `RelationshipType`<sup>Optional</sup> <a name="RelationshipType" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.relationshipType"></a>

```go
RelationshipType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#relationship_type DataDatabricksGenieAgents#relationship_type}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

&datadatabricksgenieagents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft {
	Identifier: *string,
	Alias: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft.property.identifier">Identifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft.property.alias">Alias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}. |

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

&datadatabricksgenieagents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight {
	Identifier: *string,
	Alias: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight.property.identifier">Identifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight.property.alias">Alias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}. |

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

&datadatabricksgenieagents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions {
	Id: *string,
	Identifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions.property.identifier">Identifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

&datadatabricksgenieagents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets {
	Expressions: interface{},
	Filters: interface{},
	Measures: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets.property.expressions">Expressions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#expressions DataDatabricksGenieAgents#expressions}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets.property.filters">Filters</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#filters DataDatabricksGenieAgents#filters}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets.property.measures">Measures</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#measures DataDatabricksGenieAgents#measures}. |

---

##### `Expressions`<sup>Optional</sup> <a name="Expressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets.property.expressions"></a>

```go
Expressions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#expressions DataDatabricksGenieAgents#expressions}.

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets.property.filters"></a>

```go
Filters interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#filters DataDatabricksGenieAgents#filters}.

---

##### `Measures`<sup>Optional</sup> <a name="Measures" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets.property.measures"></a>

```go
Measures interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#measures DataDatabricksGenieAgents#measures}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

&datadatabricksgenieagents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions {
	Id: *string,
	Sql: *string,
	Alias: *string,
	DisplayName: *string,
	Instruction: *string,
	Synonyms: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.sql">Sql</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.alias">Alias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.instruction">Instruction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.synonyms">Synonyms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.sql"></a>

```go
Sql *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}.

---

##### `Instruction`<sup>Optional</sup> <a name="Instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.instruction"></a>

```go
Instruction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}.

---

##### `Synonyms`<sup>Optional</sup> <a name="Synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.synonyms"></a>

```go
Synonyms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

&datadatabricksgenieagents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters {
	Id: *string,
	Sql: *string,
	DisplayName: *string,
	Instruction: *string,
	Synonyms: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.sql">Sql</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.instruction">Instruction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.synonyms">Synonyms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.sql"></a>

```go
Sql *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}.

---

##### `Instruction`<sup>Optional</sup> <a name="Instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.instruction"></a>

```go
Instruction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}.

---

##### `Synonyms`<sup>Optional</sup> <a name="Synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.synonyms"></a>

```go
Synonyms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

&datadatabricksgenieagents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures {
	Id: *string,
	Sql: *string,
	Alias: *string,
	DisplayName: *string,
	Instruction: *string,
	Synonyms: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.sql">Sql</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.alias">Alias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.instruction">Instruction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.synonyms">Synonyms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.sql"></a>

```go
Sql *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}.

---

##### `Instruction`<sup>Optional</sup> <a name="Instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.instruction"></a>

```go
Instruction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}.

---

##### `Synonyms`<sup>Optional</sup> <a name="Synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.synonyms"></a>

```go
Synonyms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

&datadatabricksgenieagents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions {
	Content: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions.property.content">Content</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#content DataDatabricksGenieAgents#content}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions.property.content"></a>

```go
Content *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#content DataDatabricksGenieAgents#content}.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatabricksGenieAgentsGenieAgentsProviderConfig <a name="DataDatabricksGenieAgentsGenieAgentsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

&datadatabricksgenieagents.DataDatabricksGenieAgentsGenieAgentsProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#workspace_id DataDatabricksGenieAgents#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#workspace_id DataDatabricksGenieAgents#workspace_id}.

---

### DataDatabricksGenieAgentsProviderConfig <a name="DataDatabricksGenieAgentsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

&datadatabricksgenieagents.DataDatabricksGenieAgentsProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#workspace_id DataDatabricksGenieAgents#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#workspace_id DataDatabricksGenieAgents#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.putQuestions">PutQuestions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.resetQuestions">ResetQuestions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutQuestions` <a name="PutQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.putQuestions"></a>

```go
func PutQuestions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.putQuestions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetQuestions` <a name="ResetQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.resetQuestions"></a>

```go
func ResetQuestions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.questions">Questions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.questionsInput">QuestionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Questions`<sup>Required</sup> <a name="Questions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.questions"></a>

```go
func Questions() DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList</a>

---

##### `QuestionsInput`<sup>Optional</sup> <a name="QuestionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.questionsInput"></a>

```go
func QuestionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.get"></a>

```go
func Get(index *f64) DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.get"></a>

```go
func Get(index *f64) DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.putAnswer">PutAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.resetAnswer">ResetAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.resetEvaluationNote">ResetEvaluationNote</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnswer` <a name="PutAnswer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.putAnswer"></a>

```go
func PutAnswer(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.putAnswer.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAnswer` <a name="ResetAnswer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.resetAnswer"></a>

```go
func ResetAnswer()
```

##### `ResetEvaluationNote` <a name="ResetEvaluationNote" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.resetEvaluationNote"></a>

```go
func ResetEvaluationNote()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.answer">Answer</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.answerInput">AnswerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.evaluationNoteInput">EvaluationNoteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.questionInput">QuestionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.evaluationNote">EvaluationNote</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.question">Question</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Answer`<sup>Required</sup> <a name="Answer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.answer"></a>

```go
func Answer() DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList</a>

---

##### `AnswerInput`<sup>Optional</sup> <a name="AnswerInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.answerInput"></a>

```go
func AnswerInput() interface{}
```

- *Type:* interface{}

---

##### `EvaluationNoteInput`<sup>Optional</sup> <a name="EvaluationNoteInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.evaluationNoteInput"></a>

```go
func EvaluationNoteInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `QuestionInput`<sup>Optional</sup> <a name="QuestionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.questionInput"></a>

```go
func QuestionInput() *string
```

- *Type:* *string

---

##### `EvaluationNote`<sup>Required</sup> <a name="EvaluationNote" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.evaluationNote"></a>

```go
func EvaluationNote() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Question`<sup>Required</sup> <a name="Question" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.question"></a>

```go
func Question() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.putSampleQuestions">PutSampleQuestions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.resetSampleQuestions">ResetSampleQuestions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSampleQuestions` <a name="PutSampleQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.putSampleQuestions"></a>

```go
func PutSampleQuestions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.putSampleQuestions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSampleQuestions` <a name="ResetSampleQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.resetSampleQuestions"></a>

```go
func ResetSampleQuestions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.sampleQuestions">SampleQuestions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.sampleQuestionsInput">SampleQuestionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SampleQuestions`<sup>Required</sup> <a name="SampleQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.sampleQuestions"></a>

```go
func SampleQuestions() DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList</a>

---

##### `SampleQuestionsInput`<sup>Optional</sup> <a name="SampleQuestionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.sampleQuestionsInput"></a>

```go
func SampleQuestionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.get"></a>

```go
func Get(index *f64) DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.questionInput">QuestionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.question">Question</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `QuestionInput`<sup>Optional</sup> <a name="QuestionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.questionInput"></a>

```go
func QuestionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Question`<sup>Required</sup> <a name="Question" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.question"></a>

```go
func Question() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.get"></a>

```go
func Get(index *f64) DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnectionInput">McpConnectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnection">McpConnection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `McpConnectionInput`<sup>Optional</sup> <a name="McpConnectionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnectionInput"></a>

```go
func McpConnectionInput() *string
```

- *Type:* *string

---

##### `McpConnection`<sup>Required</sup> <a name="McpConnection" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnection"></a>

```go
func McpConnection() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putMcpConnections">PutMcpConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putTables">PutTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resetMcpConnections">ResetMcpConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resetTables">ResetTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resetVolumes">ResetVolumes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMcpConnections` <a name="PutMcpConnections" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putMcpConnections"></a>

```go
func PutMcpConnections(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putMcpConnections.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTables` <a name="PutTables" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putTables"></a>

```go
func PutTables(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putTables.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVolumes` <a name="PutVolumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putVolumes"></a>

```go
func PutVolumes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putVolumes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMcpConnections` <a name="ResetMcpConnections" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resetMcpConnections"></a>

```go
func ResetMcpConnections()
```

##### `ResetTables` <a name="ResetTables" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resetTables"></a>

```go
func ResetTables()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resetVolumes"></a>

```go
func ResetVolumes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.mcpConnections">McpConnections</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.tables">Tables</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.volumes">Volumes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.mcpConnectionsInput">McpConnectionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.tablesInput">TablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.volumesInput">VolumesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `McpConnections`<sup>Required</sup> <a name="McpConnections" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.mcpConnections"></a>

```go
func McpConnections() DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList</a>

---

##### `Tables`<sup>Required</sup> <a name="Tables" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.tables"></a>

```go
func Tables() DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList</a>

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.volumes"></a>

```go
func Volumes() DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList</a>

---

##### `McpConnectionsInput`<sup>Optional</sup> <a name="McpConnectionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.mcpConnectionsInput"></a>

```go
func McpConnectionsInput() interface{}
```

- *Type:* interface{}

---

##### `TablesInput`<sup>Optional</sup> <a name="TablesInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.tablesInput"></a>

```go
func TablesInput() interface{}
```

- *Type:* interface{}

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.volumesInput"></a>

```go
func VolumesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.get"></a>

```go
func Get(index *f64) DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableEntityMatching">ResetEnableEntityMatching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableFormatAssistance">ResetEnableFormatAssistance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetExclude">ResetExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetSynonyms">ResetSynonyms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEnableEntityMatching` <a name="ResetEnableEntityMatching" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableEntityMatching"></a>

```go
func ResetEnableEntityMatching()
```

##### `ResetEnableFormatAssistance` <a name="ResetEnableFormatAssistance" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableFormatAssistance"></a>

```go
func ResetEnableFormatAssistance()
```

##### `ResetExclude` <a name="ResetExclude" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetExclude"></a>

```go
func ResetExclude()
```

##### `ResetSynonyms` <a name="ResetSynonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetSynonyms"></a>

```go
func ResetSynonyms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.columnInput">ColumnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatchingInput">EnableEntityMatchingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistanceInput">EnableFormatAssistanceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.excludeInput">ExcludeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonymsInput">SynonymsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.column">Column</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatching">EnableEntityMatching</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistance">EnableFormatAssistance</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.exclude">Exclude</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonyms">Synonyms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.columnInput"></a>

```go
func ColumnInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnableEntityMatchingInput`<sup>Optional</sup> <a name="EnableEntityMatchingInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatchingInput"></a>

```go
func EnableEntityMatchingInput() interface{}
```

- *Type:* interface{}

---

##### `EnableFormatAssistanceInput`<sup>Optional</sup> <a name="EnableFormatAssistanceInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistanceInput"></a>

```go
func EnableFormatAssistanceInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.excludeInput"></a>

```go
func ExcludeInput() interface{}
```

- *Type:* interface{}

---

##### `SynonymsInput`<sup>Optional</sup> <a name="SynonymsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonymsInput"></a>

```go
func SynonymsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.column"></a>

```go
func Column() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnableEntityMatching`<sup>Required</sup> <a name="EnableEntityMatching" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatching"></a>

```go
func EnableEntityMatching() interface{}
```

- *Type:* interface{}

---

##### `EnableFormatAssistance`<sup>Required</sup> <a name="EnableFormatAssistance" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistance"></a>

```go
func EnableFormatAssistance() interface{}
```

- *Type:* interface{}

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.exclude"></a>

```go
func Exclude() interface{}
```

- *Type:* interface{}

---

##### `Synonyms`<sup>Required</sup> <a name="Synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonyms"></a>

```go
func Synonyms() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.get"></a>

```go
func Get(index *f64) DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.putColumnConfigs">PutColumnConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.resetColumnConfigs">ResetColumnConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumnConfigs` <a name="PutColumnConfigs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.putColumnConfigs"></a>

```go
func PutColumnConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.putColumnConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetColumnConfigs` <a name="ResetColumnConfigs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.resetColumnConfigs"></a>

```go
func ResetColumnConfigs()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.columnConfigs">ColumnConfigs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.columnConfigsInput">ColumnConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnConfigs`<sup>Required</sup> <a name="ColumnConfigs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.columnConfigs"></a>

```go
func ColumnConfigs() DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList</a>

---

##### `ColumnConfigsInput`<sup>Optional</sup> <a name="ColumnConfigsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.columnConfigsInput"></a>

```go
func ColumnConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.get"></a>

```go
func Get(index *f64) DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.get"></a>

```go
func Get(index *f64) DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.resetUsageGuidance">ResetUsageGuidance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters"></a>

```go
func PutParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetUsageGuidance` <a name="ResetUsageGuidance" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.resetUsageGuidance"></a>

```go
func ResetUsageGuidance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.questionInput">QuestionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sqlInput">SqlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidanceInput">UsageGuidanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.question">Question</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sql">Sql</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidance">UsageGuidance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parameters"></a>

```go
func Parameters() DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parametersInput"></a>

```go
func ParametersInput() interface{}
```

- *Type:* interface{}

---

##### `QuestionInput`<sup>Optional</sup> <a name="QuestionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.questionInput"></a>

```go
func QuestionInput() *string
```

- *Type:* *string

---

##### `SqlInput`<sup>Optional</sup> <a name="SqlInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sqlInput"></a>

```go
func SqlInput() *string
```

- *Type:* *string

---

##### `UsageGuidanceInput`<sup>Optional</sup> <a name="UsageGuidanceInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidanceInput"></a>

```go
func UsageGuidanceInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Question`<sup>Required</sup> <a name="Question" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.question"></a>

```go
func Question() *string
```

- *Type:* *string

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sql"></a>

```go
func Sql() *string
```

- *Type:* *string

---

##### `UsageGuidance`<sup>Required</sup> <a name="UsageGuidance" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidance"></a>

```go
func UsageGuidance() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange">PutValueRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValueRange">ResetValueRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValueRange` <a name="PutValueRange" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange"></a>

```go
func PutValueRange(value DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

---

##### `ResetValueRange` <a name="ResetValueRange" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValueRange"></a>

```go
func ResetValueRange()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRange">ValueRange</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRangeInput">ValueRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueRange`<sup>Required</sup> <a name="ValueRange" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRange"></a>

```go
func ValueRange() DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference</a>

---

##### `ValueRangeInput`<sup>Optional</sup> <a name="ValueRangeInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRangeInput"></a>

```go
func ValueRangeInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMax"></a>

```go
func ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMin"></a>

```go
func ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.minInput">MinInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.max">Max</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.min">Min</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.maxInput"></a>

```go
func MaxInput() *string
```

- *Type:* *string

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.minInput"></a>

```go
func MinInput() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.max"></a>

```go
func Max() *string
```

- *Type:* *string

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.min"></a>

```go
func Min() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.get"></a>

```go
func Get(index *f64) DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue">PutDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetTypeHint">ResetTypeHint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefaultValue` <a name="PutDefaultValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue"></a>

```go
func PutDefaultValue(value DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

---

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDefaultValue"></a>

```go
func ResetDefaultValue()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetTypeHint` <a name="ResetTypeHint" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetTypeHint"></a>

```go
func ResetTypeHint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValue">DefaultValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHintInput">TypeHintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHint">TypeHint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValue"></a>

```go
func DefaultValue() DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference</a>

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValueInput"></a>

```go
func DefaultValueInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeHintInput`<sup>Optional</sup> <a name="TypeHintInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHintInput"></a>

```go
func TypeHintInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TypeHint`<sup>Required</sup> <a name="TypeHint" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHint"></a>

```go
func TypeHint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.resetAlias"></a>

```go
func ResetAlias()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.get"></a>

```go
func Get(index *f64) DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.putLeft">PutLeft</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.putRight">PutRight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resetInstruction">ResetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resetRelationshipType">ResetRelationshipType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLeft` <a name="PutLeft" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.putLeft"></a>

```go
func PutLeft(value DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.putLeft.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft</a>

---

##### `PutRight` <a name="PutRight" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.putRight"></a>

```go
func PutRight(value DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.putRight.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetInstruction` <a name="ResetInstruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resetInstruction"></a>

```go
func ResetInstruction()
```

##### `ResetRelationshipType` <a name="ResetRelationshipType" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resetRelationshipType"></a>

```go
func ResetRelationshipType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.left">Left</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.right">Right</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.instructionInput">InstructionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.leftInput">LeftInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.relationshipTypeInput">RelationshipTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.rightInput">RightInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.sqlInput">SqlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.instruction">Instruction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.relationshipType">RelationshipType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.sql">Sql</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Left`<sup>Required</sup> <a name="Left" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.left"></a>

```go
func Left() DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference</a>

---

##### `Right`<sup>Required</sup> <a name="Right" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.right"></a>

```go
func Right() DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstructionInput`<sup>Optional</sup> <a name="InstructionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.instructionInput"></a>

```go
func InstructionInput() *string
```

- *Type:* *string

---

##### `LeftInput`<sup>Optional</sup> <a name="LeftInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.leftInput"></a>

```go
func LeftInput() DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft</a>

---

##### `RelationshipTypeInput`<sup>Optional</sup> <a name="RelationshipTypeInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.relationshipTypeInput"></a>

```go
func RelationshipTypeInput() *string
```

- *Type:* *string

---

##### `RightInput`<sup>Optional</sup> <a name="RightInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.rightInput"></a>

```go
func RightInput() DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight</a>

---

##### `SqlInput`<sup>Optional</sup> <a name="SqlInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.sqlInput"></a>

```go
func SqlInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instruction`<sup>Required</sup> <a name="Instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.instruction"></a>

```go
func Instruction() *string
```

- *Type:* *string

---

##### `RelationshipType`<sup>Required</sup> <a name="RelationshipType" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.relationshipType"></a>

```go
func RelationshipType() *string
```

- *Type:* *string

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.sql"></a>

```go
func Sql() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.resetAlias"></a>

```go
func ResetAlias()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putExampleQuestionSqls">PutExampleQuestionSqls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putJoinSpecs">PutJoinSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putSqlFunctions">PutSqlFunctions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putSqlSnippets">PutSqlSnippets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putTextInstructions">PutTextInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetExampleQuestionSqls">ResetExampleQuestionSqls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetJoinSpecs">ResetJoinSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetSqlFunctions">ResetSqlFunctions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetSqlSnippets">ResetSqlSnippets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetTextInstructions">ResetTextInstructions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExampleQuestionSqls` <a name="PutExampleQuestionSqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putExampleQuestionSqls"></a>

```go
func PutExampleQuestionSqls(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putExampleQuestionSqls.parameter.value"></a>

- *Type:* interface{}

---

##### `PutJoinSpecs` <a name="PutJoinSpecs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putJoinSpecs"></a>

```go
func PutJoinSpecs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putJoinSpecs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSqlFunctions` <a name="PutSqlFunctions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putSqlFunctions"></a>

```go
func PutSqlFunctions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putSqlFunctions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSqlSnippets` <a name="PutSqlSnippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putSqlSnippets"></a>

```go
func PutSqlSnippets(value DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putSqlSnippets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets</a>

---

##### `PutTextInstructions` <a name="PutTextInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putTextInstructions"></a>

```go
func PutTextInstructions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putTextInstructions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExampleQuestionSqls` <a name="ResetExampleQuestionSqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetExampleQuestionSqls"></a>

```go
func ResetExampleQuestionSqls()
```

##### `ResetJoinSpecs` <a name="ResetJoinSpecs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetJoinSpecs"></a>

```go
func ResetJoinSpecs()
```

##### `ResetSqlFunctions` <a name="ResetSqlFunctions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetSqlFunctions"></a>

```go
func ResetSqlFunctions()
```

##### `ResetSqlSnippets` <a name="ResetSqlSnippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetSqlSnippets"></a>

```go
func ResetSqlSnippets()
```

##### `ResetTextInstructions` <a name="ResetTextInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetTextInstructions"></a>

```go
func ResetTextInstructions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.exampleQuestionSqls">ExampleQuestionSqls</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.joinSpecs">JoinSpecs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.sqlFunctions">SqlFunctions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.sqlSnippets">SqlSnippets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.textInstructions">TextInstructions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.exampleQuestionSqlsInput">ExampleQuestionSqlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.joinSpecsInput">JoinSpecsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.sqlFunctionsInput">SqlFunctionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.sqlSnippetsInput">SqlSnippetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.textInstructionsInput">TextInstructionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExampleQuestionSqls`<sup>Required</sup> <a name="ExampleQuestionSqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.exampleQuestionSqls"></a>

```go
func ExampleQuestionSqls() DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList</a>

---

##### `JoinSpecs`<sup>Required</sup> <a name="JoinSpecs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.joinSpecs"></a>

```go
func JoinSpecs() DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList</a>

---

##### `SqlFunctions`<sup>Required</sup> <a name="SqlFunctions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.sqlFunctions"></a>

```go
func SqlFunctions() DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList</a>

---

##### `SqlSnippets`<sup>Required</sup> <a name="SqlSnippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.sqlSnippets"></a>

```go
func SqlSnippets() DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference</a>

---

##### `TextInstructions`<sup>Required</sup> <a name="TextInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.textInstructions"></a>

```go
func TextInstructions() DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList</a>

---

##### `ExampleQuestionSqlsInput`<sup>Optional</sup> <a name="ExampleQuestionSqlsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.exampleQuestionSqlsInput"></a>

```go
func ExampleQuestionSqlsInput() interface{}
```

- *Type:* interface{}

---

##### `JoinSpecsInput`<sup>Optional</sup> <a name="JoinSpecsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.joinSpecsInput"></a>

```go
func JoinSpecsInput() interface{}
```

- *Type:* interface{}

---

##### `SqlFunctionsInput`<sup>Optional</sup> <a name="SqlFunctionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.sqlFunctionsInput"></a>

```go
func SqlFunctionsInput() interface{}
```

- *Type:* interface{}

---

##### `SqlSnippetsInput`<sup>Optional</sup> <a name="SqlSnippetsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.sqlSnippetsInput"></a>

```go
func SqlSnippetsInput() interface{}
```

- *Type:* interface{}

---

##### `TextInstructionsInput`<sup>Optional</sup> <a name="TextInstructionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.textInstructionsInput"></a>

```go
func TextInstructionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.get"></a>

```go
func Get(index *f64) DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.get"></a>

```go
func Get(index *f64) DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetInstruction">ResetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetSynonyms">ResetSynonyms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetInstruction` <a name="ResetInstruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetInstruction"></a>

```go
func ResetInstruction()
```

##### `ResetSynonyms` <a name="ResetSynonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetSynonyms"></a>

```go
func ResetSynonyms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instructionInput">InstructionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sqlInput">SqlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonymsInput">SynonymsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instruction">Instruction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sql">Sql</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonyms">Synonyms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstructionInput`<sup>Optional</sup> <a name="InstructionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instructionInput"></a>

```go
func InstructionInput() *string
```

- *Type:* *string

---

##### `SqlInput`<sup>Optional</sup> <a name="SqlInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sqlInput"></a>

```go
func SqlInput() *string
```

- *Type:* *string

---

##### `SynonymsInput`<sup>Optional</sup> <a name="SynonymsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonymsInput"></a>

```go
func SynonymsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instruction`<sup>Required</sup> <a name="Instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instruction"></a>

```go
func Instruction() *string
```

- *Type:* *string

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sql"></a>

```go
func Sql() *string
```

- *Type:* *string

---

##### `Synonyms`<sup>Required</sup> <a name="Synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonyms"></a>

```go
func Synonyms() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.get"></a>

```go
func Get(index *f64) DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetInstruction">ResetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetSynonyms">ResetSynonyms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetInstruction` <a name="ResetInstruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetInstruction"></a>

```go
func ResetInstruction()
```

##### `ResetSynonyms` <a name="ResetSynonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetSynonyms"></a>

```go
func ResetSynonyms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instructionInput">InstructionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sqlInput">SqlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonymsInput">SynonymsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instruction">Instruction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sql">Sql</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonyms">Synonyms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstructionInput`<sup>Optional</sup> <a name="InstructionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instructionInput"></a>

```go
func InstructionInput() *string
```

- *Type:* *string

---

##### `SqlInput`<sup>Optional</sup> <a name="SqlInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sqlInput"></a>

```go
func SqlInput() *string
```

- *Type:* *string

---

##### `SynonymsInput`<sup>Optional</sup> <a name="SynonymsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonymsInput"></a>

```go
func SynonymsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instruction`<sup>Required</sup> <a name="Instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instruction"></a>

```go
func Instruction() *string
```

- *Type:* *string

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sql"></a>

```go
func Sql() *string
```

- *Type:* *string

---

##### `Synonyms`<sup>Required</sup> <a name="Synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonyms"></a>

```go
func Synonyms() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.get"></a>

```go
func Get(index *f64) DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetInstruction">ResetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetSynonyms">ResetSynonyms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetInstruction` <a name="ResetInstruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetInstruction"></a>

```go
func ResetInstruction()
```

##### `ResetSynonyms` <a name="ResetSynonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetSynonyms"></a>

```go
func ResetSynonyms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instructionInput">InstructionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sqlInput">SqlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonymsInput">SynonymsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instruction">Instruction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sql">Sql</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonyms">Synonyms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstructionInput`<sup>Optional</sup> <a name="InstructionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instructionInput"></a>

```go
func InstructionInput() *string
```

- *Type:* *string

---

##### `SqlInput`<sup>Optional</sup> <a name="SqlInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sqlInput"></a>

```go
func SqlInput() *string
```

- *Type:* *string

---

##### `SynonymsInput`<sup>Optional</sup> <a name="SynonymsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonymsInput"></a>

```go
func SynonymsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instruction`<sup>Required</sup> <a name="Instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instruction"></a>

```go
func Instruction() *string
```

- *Type:* *string

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sql"></a>

```go
func Sql() *string
```

- *Type:* *string

---

##### `Synonyms`<sup>Required</sup> <a name="Synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonyms"></a>

```go
func Synonyms() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putExpressions">PutExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putMeasures">PutMeasures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resetExpressions">ResetExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resetMeasures">ResetMeasures</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpressions` <a name="PutExpressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putExpressions"></a>

```go
func PutExpressions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putExpressions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFilters` <a name="PutFilters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putFilters"></a>

```go
func PutFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putFilters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMeasures` <a name="PutMeasures" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putMeasures"></a>

```go
func PutMeasures(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putMeasures.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExpressions` <a name="ResetExpressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resetExpressions"></a>

```go
func ResetExpressions()
```

##### `ResetFilters` <a name="ResetFilters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resetFilters"></a>

```go
func ResetFilters()
```

##### `ResetMeasures` <a name="ResetMeasures" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resetMeasures"></a>

```go
func ResetMeasures()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.expressions">Expressions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.measures">Measures</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.expressionsInput">ExpressionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.filtersInput">FiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.measuresInput">MeasuresInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expressions`<sup>Required</sup> <a name="Expressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.expressions"></a>

```go
func Expressions() DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList</a>

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.filters"></a>

```go
func Filters() DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList</a>

---

##### `Measures`<sup>Required</sup> <a name="Measures" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.measures"></a>

```go
func Measures() DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList</a>

---

##### `ExpressionsInput`<sup>Optional</sup> <a name="ExpressionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.expressionsInput"></a>

```go
func ExpressionsInput() interface{}
```

- *Type:* interface{}

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.filtersInput"></a>

```go
func FiltersInput() interface{}
```

- *Type:* interface{}

---

##### `MeasuresInput`<sup>Optional</sup> <a name="MeasuresInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.measuresInput"></a>

```go
func MeasuresInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.get"></a>

```go
func Get(index *f64) DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putBenchmarks">PutBenchmarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putDataSources">PutDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putInstructions">PutInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resetBenchmarks">ResetBenchmarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resetDataSources">ResetDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resetInstructions">ResetInstructions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBenchmarks` <a name="PutBenchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putBenchmarks"></a>

```go
func PutBenchmarks(value DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putBenchmarks.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks</a>

---

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putConfig"></a>

```go
func PutConfig(value DataDatabricksGenieAgentsGenieAgentsDefinitionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig">DataDatabricksGenieAgentsGenieAgentsDefinitionConfig</a>

---

##### `PutDataSources` <a name="PutDataSources" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putDataSources"></a>

```go
func PutDataSources(value DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putDataSources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources</a>

---

##### `PutInstructions` <a name="PutInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putInstructions"></a>

```go
func PutInstructions(value DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putInstructions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions</a>

---

##### `ResetBenchmarks` <a name="ResetBenchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resetBenchmarks"></a>

```go
func ResetBenchmarks()
```

##### `ResetConfig` <a name="ResetConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetDataSources` <a name="ResetDataSources" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resetDataSources"></a>

```go
func ResetDataSources()
```

##### `ResetInstructions` <a name="ResetInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resetInstructions"></a>

```go
func ResetInstructions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.benchmarks">Benchmarks</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.dataSources">DataSources</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.instructions">Instructions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.benchmarksInput">BenchmarksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.configInput">ConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.dataSourcesInput">DataSourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.instructionsInput">InstructionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition">DataDatabricksGenieAgentsGenieAgentsDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Benchmarks`<sup>Required</sup> <a name="Benchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.benchmarks"></a>

```go
func Benchmarks() DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference</a>

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.config"></a>

```go
func Config() DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference</a>

---

##### `DataSources`<sup>Required</sup> <a name="DataSources" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.dataSources"></a>

```go
func DataSources() DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference</a>

---

##### `Instructions`<sup>Required</sup> <a name="Instructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.instructions"></a>

```go
func Instructions() DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference</a>

---

##### `BenchmarksInput`<sup>Optional</sup> <a name="BenchmarksInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.benchmarksInput"></a>

```go
func BenchmarksInput() interface{}
```

- *Type:* interface{}

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.configInput"></a>

```go
func ConfigInput() interface{}
```

- *Type:* interface{}

---

##### `DataSourcesInput`<sup>Optional</sup> <a name="DataSourcesInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.dataSourcesInput"></a>

```go
func DataSourcesInput() interface{}
```

- *Type:* interface{}

---

##### `InstructionsInput`<sup>Optional</sup> <a name="InstructionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.instructionsInput"></a>

```go
func InstructionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksGenieAgentsGenieAgentsDefinition
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition">DataDatabricksGenieAgentsGenieAgentsDefinition</a>

---


### DataDatabricksGenieAgentsGenieAgentsList <a name="DataDatabricksGenieAgentsGenieAgentsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksGenieAgentsGenieAgentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.get"></a>

```go
func Get(index *f64) DataDatabricksGenieAgentsGenieAgentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsGenieAgentsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksGenieAgentsGenieAgentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksGenieAgentsGenieAgentsProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig">DataDatabricksGenieAgentsGenieAgentsProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.definition">Definition</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.effectiveParentPath">EffectiveParentPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.parentPath">ParentPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference">DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.warehouseId">WarehouseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents">DataDatabricksGenieAgentsGenieAgents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.definition"></a>

```go
func Definition() DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EffectiveParentPath`<sup>Required</sup> <a name="EffectiveParentPath" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.effectiveParentPath"></a>

```go
func EffectiveParentPath() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ParentPath`<sup>Required</sup> <a name="ParentPath" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.parentPath"></a>

```go
func ParentPath() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference">DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.warehouseId"></a>

```go
func WarehouseId() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksGenieAgentsGenieAgents
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents">DataDatabricksGenieAgentsGenieAgents</a>

---


### DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentsProviderConfigOutputReference <a name="DataDatabricksGenieAgentsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagents"

datadatabricksgenieagents.NewDataDatabricksGenieAgentsProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksGenieAgentsProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



