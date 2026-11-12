# `dataDatabricksGenieAgent` Submodule <a name="`dataDatabricksGenieAgent` Submodule" id="@cdktn/provider-databricks.dataDatabricksGenieAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksGenieAgent <a name="DataDatabricksGenieAgent" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent databricks_genie_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgent(scope Construct, id *string, config DataDatabricksGenieAgentConfig) DataDatabricksGenieAgent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig">DataDatabricksGenieAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig">DataDatabricksGenieAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksGenieAgentProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig">DataDatabricksGenieAgentProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksGenieAgent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.DataDatabricksGenieAgent_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.DataDatabricksGenieAgent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.DataDatabricksGenieAgent_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.DataDatabricksGenieAgent_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksGenieAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksGenieAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksGenieAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksGenieAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.definition">Definition</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference">DataDatabricksGenieAgentDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.effectiveParentPath">EffectiveParentPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.parentPath">ParentPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference">DataDatabricksGenieAgentProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.warehouseId">WarehouseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.definition"></a>

```go
func Definition() DataDatabricksGenieAgentDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference">DataDatabricksGenieAgentDefinitionOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EffectiveParentPath`<sup>Required</sup> <a name="EffectiveParentPath" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.effectiveParentPath"></a>

```go
func EffectiveParentPath() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ParentPath`<sup>Required</sup> <a name="ParentPath" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.parentPath"></a>

```go
func ParentPath() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksGenieAgentProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference">DataDatabricksGenieAgentProviderConfigOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.warehouseId"></a>

```go
func WarehouseId() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksGenieAgentConfig <a name="DataDatabricksGenieAgentConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

&datadatabricksgenieagent.DataDatabricksGenieAgentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#name DataDatabricksGenieAgent#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig">DataDatabricksGenieAgentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#provider_config DataDatabricksGenieAgent#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#name DataDatabricksGenieAgent#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksGenieAgentProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig">DataDatabricksGenieAgentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#provider_config DataDatabricksGenieAgent#provider_config}.

---

### DataDatabricksGenieAgentDefinition <a name="DataDatabricksGenieAgentDefinition" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

&datadatabricksgenieagent.DataDatabricksGenieAgentDefinition {
	Benchmarks: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks,
	Config: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig,
	DataSources: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources,
	Instructions: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.property.benchmarks">Benchmarks</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks">DataDatabricksGenieAgentDefinitionBenchmarks</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#benchmarks DataDatabricksGenieAgent#benchmarks}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.property.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig">DataDatabricksGenieAgentDefinitionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#config DataDatabricksGenieAgent#config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.property.dataSources">DataSources</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources">DataDatabricksGenieAgentDefinitionDataSources</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#data_sources DataDatabricksGenieAgent#data_sources}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.property.instructions">Instructions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions">DataDatabricksGenieAgentDefinitionInstructions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instructions DataDatabricksGenieAgent#instructions}. |

---

##### `Benchmarks`<sup>Optional</sup> <a name="Benchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.property.benchmarks"></a>

```go
Benchmarks DataDatabricksGenieAgentDefinitionBenchmarks
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks">DataDatabricksGenieAgentDefinitionBenchmarks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#benchmarks DataDatabricksGenieAgent#benchmarks}.

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.property.config"></a>

```go
Config DataDatabricksGenieAgentDefinitionConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig">DataDatabricksGenieAgentDefinitionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#config DataDatabricksGenieAgent#config}.

---

##### `DataSources`<sup>Optional</sup> <a name="DataSources" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.property.dataSources"></a>

```go
DataSources DataDatabricksGenieAgentDefinitionDataSources
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources">DataDatabricksGenieAgentDefinitionDataSources</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#data_sources DataDatabricksGenieAgent#data_sources}.

---

##### `Instructions`<sup>Optional</sup> <a name="Instructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.property.instructions"></a>

```go
Instructions DataDatabricksGenieAgentDefinitionInstructions
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions">DataDatabricksGenieAgentDefinitionInstructions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instructions DataDatabricksGenieAgent#instructions}.

---

### DataDatabricksGenieAgentDefinitionBenchmarks <a name="DataDatabricksGenieAgentDefinitionBenchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

&datadatabricksgenieagent.DataDatabricksGenieAgentDefinitionBenchmarks {
	Questions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks.property.questions">Questions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#questions DataDatabricksGenieAgent#questions}. |

---

##### `Questions`<sup>Optional</sup> <a name="Questions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks.property.questions"></a>

```go
Questions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#questions DataDatabricksGenieAgent#questions}.

---

### DataDatabricksGenieAgentDefinitionBenchmarksQuestions <a name="DataDatabricksGenieAgentDefinitionBenchmarksQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

&datadatabricksgenieagent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions {
	Id: *string,
	Question: *string,
	Answer: interface{},
	EvaluationNote: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.property.question">Question</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#question DataDatabricksGenieAgent#question}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.property.answer">Answer</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#answer DataDatabricksGenieAgent#answer}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.property.evaluationNote">EvaluationNote</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#evaluation_note DataDatabricksGenieAgent#evaluation_note}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Question`<sup>Required</sup> <a name="Question" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.property.question"></a>

```go
Question *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#question DataDatabricksGenieAgent#question}.

---

##### `Answer`<sup>Optional</sup> <a name="Answer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.property.answer"></a>

```go
Answer interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#answer DataDatabricksGenieAgent#answer}.

---

##### `EvaluationNote`<sup>Optional</sup> <a name="EvaluationNote" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.property.evaluationNote"></a>

```go
EvaluationNote *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#evaluation_note DataDatabricksGenieAgent#evaluation_note}.

---

### DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer <a name="DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

&datadatabricksgenieagent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer {
	Content: *string,
	Format: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer.property.content">Content</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#content DataDatabricksGenieAgent#content}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer.property.format">Format</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#format DataDatabricksGenieAgent#format}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer.property.content"></a>

```go
Content *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#content DataDatabricksGenieAgent#content}.

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer.property.format"></a>

```go
Format *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#format DataDatabricksGenieAgent#format}.

---

### DataDatabricksGenieAgentDefinitionConfig <a name="DataDatabricksGenieAgentDefinitionConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

&datadatabricksgenieagent.DataDatabricksGenieAgentDefinitionConfig {
	SampleQuestions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig.property.sampleQuestions">SampleQuestions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sample_questions DataDatabricksGenieAgent#sample_questions}. |

---

##### `SampleQuestions`<sup>Optional</sup> <a name="SampleQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig.property.sampleQuestions"></a>

```go
SampleQuestions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sample_questions DataDatabricksGenieAgent#sample_questions}.

---

### DataDatabricksGenieAgentDefinitionConfigSampleQuestions <a name="DataDatabricksGenieAgentDefinitionConfigSampleQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

&datadatabricksgenieagent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions {
	Id: *string,
	Question: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions.property.question">Question</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#question DataDatabricksGenieAgent#question}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Question`<sup>Required</sup> <a name="Question" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions.property.question"></a>

```go
Question *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#question DataDatabricksGenieAgent#question}.

---

### DataDatabricksGenieAgentDefinitionDataSources <a name="DataDatabricksGenieAgentDefinitionDataSources" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

&datadatabricksgenieagent.DataDatabricksGenieAgentDefinitionDataSources {
	McpConnections: interface{},
	Tables: interface{},
	Volumes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources.property.mcpConnections">McpConnections</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#mcp_connections DataDatabricksGenieAgent#mcp_connections}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources.property.tables">Tables</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#tables DataDatabricksGenieAgent#tables}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources.property.volumes">Volumes</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#volumes DataDatabricksGenieAgent#volumes}. |

---

##### `McpConnections`<sup>Optional</sup> <a name="McpConnections" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources.property.mcpConnections"></a>

```go
McpConnections interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#mcp_connections DataDatabricksGenieAgent#mcp_connections}.

---

##### `Tables`<sup>Optional</sup> <a name="Tables" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources.property.tables"></a>

```go
Tables interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#tables DataDatabricksGenieAgent#tables}.

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources.property.volumes"></a>

```go
Volumes interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#volumes DataDatabricksGenieAgent#volumes}.

---

### DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections <a name="DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

&datadatabricksgenieagent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections {
	McpConnection: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections.property.mcpConnection">McpConnection</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#mcp_connection DataDatabricksGenieAgent#mcp_connection}. |

---

##### `McpConnection`<sup>Required</sup> <a name="McpConnection" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections.property.mcpConnection"></a>

```go
McpConnection *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#mcp_connection DataDatabricksGenieAgent#mcp_connection}.

---

### DataDatabricksGenieAgentDefinitionDataSourcesTables <a name="DataDatabricksGenieAgentDefinitionDataSourcesTables" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

&datadatabricksgenieagent.DataDatabricksGenieAgentDefinitionDataSourcesTables {
	Identifier: *string,
	ColumnConfigs: interface{},
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables.property.identifier">Identifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables.property.columnConfigs">ColumnConfigs</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#column_configs DataDatabricksGenieAgent#column_configs}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}. |

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}.

---

##### `ColumnConfigs`<sup>Optional</sup> <a name="ColumnConfigs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables.property.columnConfigs"></a>

```go
ColumnConfigs interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#column_configs DataDatabricksGenieAgent#column_configs}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}.

---

### DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs <a name="DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

&datadatabricksgenieagent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs {
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
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.column">Column</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#column DataDatabricksGenieAgent#column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.enableEntityMatching">EnableEntityMatching</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#enable_entity_matching DataDatabricksGenieAgent#enable_entity_matching}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.enableFormatAssistance">EnableFormatAssistance</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#enable_format_assistance DataDatabricksGenieAgent#enable_format_assistance}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.exclude">Exclude</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#exclude DataDatabricksGenieAgent#exclude}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.synonyms">Synonyms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.column"></a>

```go
Column *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#column DataDatabricksGenieAgent#column}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}.

---

##### `EnableEntityMatching`<sup>Optional</sup> <a name="EnableEntityMatching" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.enableEntityMatching"></a>

```go
EnableEntityMatching interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#enable_entity_matching DataDatabricksGenieAgent#enable_entity_matching}.

---

##### `EnableFormatAssistance`<sup>Optional</sup> <a name="EnableFormatAssistance" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.enableFormatAssistance"></a>

```go
EnableFormatAssistance interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#enable_format_assistance DataDatabricksGenieAgent#enable_format_assistance}.

---

##### `Exclude`<sup>Optional</sup> <a name="Exclude" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.exclude"></a>

```go
Exclude interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#exclude DataDatabricksGenieAgent#exclude}.

---

##### `Synonyms`<sup>Optional</sup> <a name="Synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.synonyms"></a>

```go
Synonyms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}.

---

### DataDatabricksGenieAgentDefinitionDataSourcesVolumes <a name="DataDatabricksGenieAgentDefinitionDataSourcesVolumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

&datadatabricksgenieagent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes {
	Path: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#path DataDatabricksGenieAgent#path}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#path DataDatabricksGenieAgent#path}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}.

---

### DataDatabricksGenieAgentDefinitionInstructions <a name="DataDatabricksGenieAgentDefinitionInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

&datadatabricksgenieagent.DataDatabricksGenieAgentDefinitionInstructions {
	ExampleQuestionSqls: interface{},
	JoinSpecs: interface{},
	SqlFunctions: interface{},
	SqlSnippets: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets,
	TextInstructions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.exampleQuestionSqls">ExampleQuestionSqls</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#example_question_sqls DataDatabricksGenieAgent#example_question_sqls}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.joinSpecs">JoinSpecs</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#join_specs DataDatabricksGenieAgent#join_specs}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.sqlFunctions">SqlFunctions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql_functions DataDatabricksGenieAgent#sql_functions}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.sqlSnippets">SqlSnippets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql_snippets DataDatabricksGenieAgent#sql_snippets}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.textInstructions">TextInstructions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#text_instructions DataDatabricksGenieAgent#text_instructions}. |

---

##### `ExampleQuestionSqls`<sup>Optional</sup> <a name="ExampleQuestionSqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.exampleQuestionSqls"></a>

```go
ExampleQuestionSqls interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#example_question_sqls DataDatabricksGenieAgent#example_question_sqls}.

---

##### `JoinSpecs`<sup>Optional</sup> <a name="JoinSpecs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.joinSpecs"></a>

```go
JoinSpecs interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#join_specs DataDatabricksGenieAgent#join_specs}.

---

##### `SqlFunctions`<sup>Optional</sup> <a name="SqlFunctions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.sqlFunctions"></a>

```go
SqlFunctions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql_functions DataDatabricksGenieAgent#sql_functions}.

---

##### `SqlSnippets`<sup>Optional</sup> <a name="SqlSnippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.sqlSnippets"></a>

```go
SqlSnippets DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql_snippets DataDatabricksGenieAgent#sql_snippets}.

---

##### `TextInstructions`<sup>Optional</sup> <a name="TextInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.textInstructions"></a>

```go
TextInstructions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#text_instructions DataDatabricksGenieAgent#text_instructions}.

---

### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

&datadatabricksgenieagent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls {
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
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.question">Question</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#question DataDatabricksGenieAgent#question}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.sql">Sql</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.parameters">Parameters</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#parameters DataDatabricksGenieAgent#parameters}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.usageGuidance">UsageGuidance</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#usage_guidance DataDatabricksGenieAgent#usage_guidance}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Question`<sup>Required</sup> <a name="Question" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.question"></a>

```go
Question *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#question DataDatabricksGenieAgent#question}.

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.sql"></a>

```go
Sql *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.parameters"></a>

```go
Parameters interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#parameters DataDatabricksGenieAgent#parameters}.

---

##### `UsageGuidance`<sup>Optional</sup> <a name="UsageGuidance" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.usageGuidance"></a>

```go
UsageGuidance *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#usage_guidance DataDatabricksGenieAgent#usage_guidance}.

---

### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

&datadatabricksgenieagent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters {
	Name: *string,
	DefaultValue: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue,
	Description: *string,
	TypeHint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#name DataDatabricksGenieAgent#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.defaultValue">DefaultValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#default_value DataDatabricksGenieAgent#default_value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.typeHint">TypeHint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#type_hint DataDatabricksGenieAgent#type_hint}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#name DataDatabricksGenieAgent#name}.

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.defaultValue"></a>

```go
DefaultValue DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#default_value DataDatabricksGenieAgent#default_value}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}.

---

##### `TypeHint`<sup>Optional</sup> <a name="TypeHint" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.typeHint"></a>

```go
TypeHint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#type_hint DataDatabricksGenieAgent#type_hint}.

---

### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

&datadatabricksgenieagent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue {
	ValueRange: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.valueRange">ValueRange</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#value_range DataDatabricksGenieAgent#value_range}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#values DataDatabricksGenieAgent#values}. |

---

##### `ValueRange`<sup>Optional</sup> <a name="ValueRange" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.valueRange"></a>

```go
ValueRange DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#value_range DataDatabricksGenieAgent#value_range}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#values DataDatabricksGenieAgent#values}.

---

### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

&datadatabricksgenieagent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange {
	Max: *string,
	Min: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.max">Max</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#max DataDatabricksGenieAgent#max}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.min">Min</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#min DataDatabricksGenieAgent#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.max"></a>

```go
Max *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#max DataDatabricksGenieAgent#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.min"></a>

```go
Min *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#min DataDatabricksGenieAgent#min}.

---

### DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs <a name="DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

&datadatabricksgenieagent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs {
	Id: *string,
	Left: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft,
	Right: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight,
	Sql: *string,
	Comment: *string,
	Instruction: *string,
	RelationshipType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.left">Left</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#left DataDatabricksGenieAgent#left}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.right">Right</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#right DataDatabricksGenieAgent#right}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.sql">Sql</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#comment DataDatabricksGenieAgent#comment}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.instruction">Instruction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.relationshipType">RelationshipType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#relationship_type DataDatabricksGenieAgent#relationship_type}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Left`<sup>Required</sup> <a name="Left" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.left"></a>

```go
Left DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#left DataDatabricksGenieAgent#left}.

---

##### `Right`<sup>Required</sup> <a name="Right" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.right"></a>

```go
Right DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#right DataDatabricksGenieAgent#right}.

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.sql"></a>

```go
Sql *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#comment DataDatabricksGenieAgent#comment}.

---

##### `Instruction`<sup>Optional</sup> <a name="Instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.instruction"></a>

```go
Instruction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}.

---

##### `RelationshipType`<sup>Optional</sup> <a name="RelationshipType" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.relationshipType"></a>

```go
RelationshipType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#relationship_type DataDatabricksGenieAgent#relationship_type}.

---

### DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft <a name="DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

&datadatabricksgenieagent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft {
	Identifier: *string,
	Alias: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft.property.identifier">Identifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft.property.alias">Alias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}. |

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}.

---

### DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight <a name="DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

&datadatabricksgenieagent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight {
	Identifier: *string,
	Alias: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight.property.identifier">Identifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight.property.alias">Alias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}. |

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}.

---

### DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

&datadatabricksgenieagent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions {
	Id: *string,
	Identifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions.property.identifier">Identifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}.

---

### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

&datadatabricksgenieagent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets {
	Expressions: interface{},
	Filters: interface{},
	Measures: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets.property.expressions">Expressions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#expressions DataDatabricksGenieAgent#expressions}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets.property.filters">Filters</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#filters DataDatabricksGenieAgent#filters}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets.property.measures">Measures</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#measures DataDatabricksGenieAgent#measures}. |

---

##### `Expressions`<sup>Optional</sup> <a name="Expressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets.property.expressions"></a>

```go
Expressions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#expressions DataDatabricksGenieAgent#expressions}.

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets.property.filters"></a>

```go
Filters interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#filters DataDatabricksGenieAgent#filters}.

---

##### `Measures`<sup>Optional</sup> <a name="Measures" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets.property.measures"></a>

```go
Measures interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#measures DataDatabricksGenieAgent#measures}.

---

### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

&datadatabricksgenieagent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions {
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
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.sql">Sql</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.alias">Alias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.instruction">Instruction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.synonyms">Synonyms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.sql"></a>

```go
Sql *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}.

---

##### `Instruction`<sup>Optional</sup> <a name="Instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.instruction"></a>

```go
Instruction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}.

---

##### `Synonyms`<sup>Optional</sup> <a name="Synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.synonyms"></a>

```go
Synonyms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}.

---

### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

&datadatabricksgenieagent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters {
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
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.sql">Sql</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.instruction">Instruction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.synonyms">Synonyms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.sql"></a>

```go
Sql *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}.

---

##### `Instruction`<sup>Optional</sup> <a name="Instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.instruction"></a>

```go
Instruction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}.

---

##### `Synonyms`<sup>Optional</sup> <a name="Synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.synonyms"></a>

```go
Synonyms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}.

---

### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

&datadatabricksgenieagent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures {
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
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.sql">Sql</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.alias">Alias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.instruction">Instruction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.synonyms">Synonyms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.sql"></a>

```go
Sql *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}.

---

##### `Instruction`<sup>Optional</sup> <a name="Instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.instruction"></a>

```go
Instruction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}.

---

##### `Synonyms`<sup>Optional</sup> <a name="Synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.synonyms"></a>

```go
Synonyms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}.

---

### DataDatabricksGenieAgentDefinitionInstructionsTextInstructions <a name="DataDatabricksGenieAgentDefinitionInstructionsTextInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

&datadatabricksgenieagent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions {
	Content: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions.property.content">Content</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#content DataDatabricksGenieAgent#content}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions.property.content"></a>

```go
Content *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#content DataDatabricksGenieAgent#content}.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatabricksGenieAgentProviderConfig <a name="DataDatabricksGenieAgentProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

&datadatabricksgenieagent.DataDatabricksGenieAgentProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#workspace_id DataDatabricksGenieAgent#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#workspace_id DataDatabricksGenieAgent#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksGenieAgentDefinitionBenchmarksOutputReference <a name="DataDatabricksGenieAgentDefinitionBenchmarksOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionBenchmarksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksGenieAgentDefinitionBenchmarksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.putQuestions">PutQuestions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.resetQuestions">ResetQuestions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutQuestions` <a name="PutQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.putQuestions"></a>

```go
func PutQuestions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.putQuestions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetQuestions` <a name="ResetQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.resetQuestions"></a>

```go
func ResetQuestions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.questions">Questions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.questionsInput">QuestionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Questions`<sup>Required</sup> <a name="Questions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.questions"></a>

```go
func Questions() DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList</a>

---

##### `QuestionsInput`<sup>Optional</sup> <a name="QuestionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.questionsInput"></a>

```go
func QuestionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList <a name="DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.get"></a>

```go
func Get(index *f64) DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference <a name="DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList <a name="DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionBenchmarksQuestionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.get"></a>

```go
func Get(index *f64) DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference <a name="DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.putAnswer">PutAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.resetAnswer">ResetAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.resetEvaluationNote">ResetEvaluationNote</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnswer` <a name="PutAnswer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.putAnswer"></a>

```go
func PutAnswer(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.putAnswer.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAnswer` <a name="ResetAnswer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.resetAnswer"></a>

```go
func ResetAnswer()
```

##### `ResetEvaluationNote` <a name="ResetEvaluationNote" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.resetEvaluationNote"></a>

```go
func ResetEvaluationNote()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.answer">Answer</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.answerInput">AnswerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.evaluationNoteInput">EvaluationNoteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.questionInput">QuestionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.evaluationNote">EvaluationNote</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.question">Question</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Answer`<sup>Required</sup> <a name="Answer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.answer"></a>

```go
func Answer() DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList</a>

---

##### `AnswerInput`<sup>Optional</sup> <a name="AnswerInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.answerInput"></a>

```go
func AnswerInput() interface{}
```

- *Type:* interface{}

---

##### `EvaluationNoteInput`<sup>Optional</sup> <a name="EvaluationNoteInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.evaluationNoteInput"></a>

```go
func EvaluationNoteInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `QuestionInput`<sup>Optional</sup> <a name="QuestionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.questionInput"></a>

```go
func QuestionInput() *string
```

- *Type:* *string

---

##### `EvaluationNote`<sup>Required</sup> <a name="EvaluationNote" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.evaluationNote"></a>

```go
func EvaluationNote() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Question`<sup>Required</sup> <a name="Question" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.question"></a>

```go
func Question() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionConfigOutputReference <a name="DataDatabricksGenieAgentDefinitionConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksGenieAgentDefinitionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.putSampleQuestions">PutSampleQuestions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.resetSampleQuestions">ResetSampleQuestions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSampleQuestions` <a name="PutSampleQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.putSampleQuestions"></a>

```go
func PutSampleQuestions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.putSampleQuestions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSampleQuestions` <a name="ResetSampleQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.resetSampleQuestions"></a>

```go
func ResetSampleQuestions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.sampleQuestions">SampleQuestions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList">DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.sampleQuestionsInput">SampleQuestionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SampleQuestions`<sup>Required</sup> <a name="SampleQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.sampleQuestions"></a>

```go
func SampleQuestions() DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList">DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList</a>

---

##### `SampleQuestionsInput`<sup>Optional</sup> <a name="SampleQuestionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.sampleQuestionsInput"></a>

```go
func SampleQuestionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList <a name="DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionConfigSampleQuestionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.get"></a>

```go
func Get(index *f64) DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference <a name="DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.questionInput">QuestionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.question">Question</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `QuestionInput`<sup>Optional</sup> <a name="QuestionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.questionInput"></a>

```go
func QuestionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Question`<sup>Required</sup> <a name="Question" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.question"></a>

```go
func Question() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList <a name="DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.get"></a>

```go
func Get(index *f64) DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference <a name="DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnectionInput">McpConnectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnection">McpConnection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `McpConnectionInput`<sup>Optional</sup> <a name="McpConnectionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnectionInput"></a>

```go
func McpConnectionInput() *string
```

- *Type:* *string

---

##### `McpConnection`<sup>Required</sup> <a name="McpConnection" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnection"></a>

```go
func McpConnection() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionDataSourcesOutputReference <a name="DataDatabricksGenieAgentDefinitionDataSourcesOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionDataSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksGenieAgentDefinitionDataSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putMcpConnections">PutMcpConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putTables">PutTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resetMcpConnections">ResetMcpConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resetTables">ResetTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resetVolumes">ResetVolumes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMcpConnections` <a name="PutMcpConnections" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putMcpConnections"></a>

```go
func PutMcpConnections(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putMcpConnections.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTables` <a name="PutTables" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putTables"></a>

```go
func PutTables(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putTables.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVolumes` <a name="PutVolumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putVolumes"></a>

```go
func PutVolumes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putVolumes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMcpConnections` <a name="ResetMcpConnections" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resetMcpConnections"></a>

```go
func ResetMcpConnections()
```

##### `ResetTables` <a name="ResetTables" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resetTables"></a>

```go
func ResetTables()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resetVolumes"></a>

```go
func ResetVolumes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.mcpConnections">McpConnections</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.tables">Tables</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList">DataDatabricksGenieAgentDefinitionDataSourcesTablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.volumes">Volumes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList">DataDatabricksGenieAgentDefinitionDataSourcesVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.mcpConnectionsInput">McpConnectionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.tablesInput">TablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.volumesInput">VolumesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `McpConnections`<sup>Required</sup> <a name="McpConnections" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.mcpConnections"></a>

```go
func McpConnections() DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList</a>

---

##### `Tables`<sup>Required</sup> <a name="Tables" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.tables"></a>

```go
func Tables() DataDatabricksGenieAgentDefinitionDataSourcesTablesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList">DataDatabricksGenieAgentDefinitionDataSourcesTablesList</a>

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.volumes"></a>

```go
func Volumes() DataDatabricksGenieAgentDefinitionDataSourcesVolumesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList">DataDatabricksGenieAgentDefinitionDataSourcesVolumesList</a>

---

##### `McpConnectionsInput`<sup>Optional</sup> <a name="McpConnectionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.mcpConnectionsInput"></a>

```go
func McpConnectionsInput() interface{}
```

- *Type:* interface{}

---

##### `TablesInput`<sup>Optional</sup> <a name="TablesInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.tablesInput"></a>

```go
func TablesInput() interface{}
```

- *Type:* interface{}

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.volumesInput"></a>

```go
func VolumesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList <a name="DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.get"></a>

```go
func Get(index *f64) DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference <a name="DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableEntityMatching">ResetEnableEntityMatching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableFormatAssistance">ResetEnableFormatAssistance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetExclude">ResetExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetSynonyms">ResetSynonyms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEnableEntityMatching` <a name="ResetEnableEntityMatching" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableEntityMatching"></a>

```go
func ResetEnableEntityMatching()
```

##### `ResetEnableFormatAssistance` <a name="ResetEnableFormatAssistance" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableFormatAssistance"></a>

```go
func ResetEnableFormatAssistance()
```

##### `ResetExclude` <a name="ResetExclude" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetExclude"></a>

```go
func ResetExclude()
```

##### `ResetSynonyms` <a name="ResetSynonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetSynonyms"></a>

```go
func ResetSynonyms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.columnInput">ColumnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatchingInput">EnableEntityMatchingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistanceInput">EnableFormatAssistanceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.excludeInput">ExcludeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonymsInput">SynonymsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.column">Column</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatching">EnableEntityMatching</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistance">EnableFormatAssistance</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.exclude">Exclude</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonyms">Synonyms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.columnInput"></a>

```go
func ColumnInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnableEntityMatchingInput`<sup>Optional</sup> <a name="EnableEntityMatchingInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatchingInput"></a>

```go
func EnableEntityMatchingInput() interface{}
```

- *Type:* interface{}

---

##### `EnableFormatAssistanceInput`<sup>Optional</sup> <a name="EnableFormatAssistanceInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistanceInput"></a>

```go
func EnableFormatAssistanceInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.excludeInput"></a>

```go
func ExcludeInput() interface{}
```

- *Type:* interface{}

---

##### `SynonymsInput`<sup>Optional</sup> <a name="SynonymsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonymsInput"></a>

```go
func SynonymsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.column"></a>

```go
func Column() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnableEntityMatching`<sup>Required</sup> <a name="EnableEntityMatching" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatching"></a>

```go
func EnableEntityMatching() interface{}
```

- *Type:* interface{}

---

##### `EnableFormatAssistance`<sup>Required</sup> <a name="EnableFormatAssistance" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistance"></a>

```go
func EnableFormatAssistance() interface{}
```

- *Type:* interface{}

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.exclude"></a>

```go
func Exclude() interface{}
```

- *Type:* interface{}

---

##### `Synonyms`<sup>Required</sup> <a name="Synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonyms"></a>

```go
func Synonyms() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionDataSourcesTablesList <a name="DataDatabricksGenieAgentDefinitionDataSourcesTablesList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionDataSourcesTablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksGenieAgentDefinitionDataSourcesTablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.get"></a>

```go
func Get(index *f64) DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference <a name="DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.putColumnConfigs">PutColumnConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.resetColumnConfigs">ResetColumnConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumnConfigs` <a name="PutColumnConfigs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.putColumnConfigs"></a>

```go
func PutColumnConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.putColumnConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetColumnConfigs` <a name="ResetColumnConfigs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.resetColumnConfigs"></a>

```go
func ResetColumnConfigs()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.columnConfigs">ColumnConfigs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.columnConfigsInput">ColumnConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnConfigs`<sup>Required</sup> <a name="ColumnConfigs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.columnConfigs"></a>

```go
func ColumnConfigs() DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList</a>

---

##### `ColumnConfigsInput`<sup>Optional</sup> <a name="ColumnConfigsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.columnConfigsInput"></a>

```go
func ColumnConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionDataSourcesVolumesList <a name="DataDatabricksGenieAgentDefinitionDataSourcesVolumesList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionDataSourcesVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksGenieAgentDefinitionDataSourcesVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.get"></a>

```go
func Get(index *f64) DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference <a name="DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.get"></a>

```go
func Get(index *f64) DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resetUsageGuidance">ResetUsageGuidance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters"></a>

```go
func PutParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetUsageGuidance` <a name="ResetUsageGuidance" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resetUsageGuidance"></a>

```go
func ResetUsageGuidance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.questionInput">QuestionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sqlInput">SqlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidanceInput">UsageGuidanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.question">Question</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sql">Sql</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidance">UsageGuidance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parameters"></a>

```go
func Parameters() DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parametersInput"></a>

```go
func ParametersInput() interface{}
```

- *Type:* interface{}

---

##### `QuestionInput`<sup>Optional</sup> <a name="QuestionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.questionInput"></a>

```go
func QuestionInput() *string
```

- *Type:* *string

---

##### `SqlInput`<sup>Optional</sup> <a name="SqlInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sqlInput"></a>

```go
func SqlInput() *string
```

- *Type:* *string

---

##### `UsageGuidanceInput`<sup>Optional</sup> <a name="UsageGuidanceInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidanceInput"></a>

```go
func UsageGuidanceInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Question`<sup>Required</sup> <a name="Question" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.question"></a>

```go
func Question() *string
```

- *Type:* *string

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sql"></a>

```go
func Sql() *string
```

- *Type:* *string

---

##### `UsageGuidance`<sup>Required</sup> <a name="UsageGuidance" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidance"></a>

```go
func UsageGuidance() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange">PutValueRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValueRange">ResetValueRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValueRange` <a name="PutValueRange" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange"></a>

```go
func PutValueRange(value DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

---

##### `ResetValueRange` <a name="ResetValueRange" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValueRange"></a>

```go
func ResetValueRange()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRange">ValueRange</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRangeInput">ValueRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueRange`<sup>Required</sup> <a name="ValueRange" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRange"></a>

```go
func ValueRange() DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference</a>

---

##### `ValueRangeInput`<sup>Optional</sup> <a name="ValueRangeInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRangeInput"></a>

```go
func ValueRangeInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMax"></a>

```go
func ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMin"></a>

```go
func ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.minInput">MinInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.max">Max</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.min">Min</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.maxInput"></a>

```go
func MaxInput() *string
```

- *Type:* *string

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.minInput"></a>

```go
func MinInput() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.max"></a>

```go
func Max() *string
```

- *Type:* *string

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.min"></a>

```go
func Min() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.get"></a>

```go
func Get(index *f64) DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue">PutDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetTypeHint">ResetTypeHint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefaultValue` <a name="PutDefaultValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue"></a>

```go
func PutDefaultValue(value DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

---

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDefaultValue"></a>

```go
func ResetDefaultValue()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetTypeHint` <a name="ResetTypeHint" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetTypeHint"></a>

```go
func ResetTypeHint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValue">DefaultValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHintInput">TypeHintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHint">TypeHint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValue"></a>

```go
func DefaultValue() DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference</a>

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValueInput"></a>

```go
func DefaultValueInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeHintInput`<sup>Optional</sup> <a name="TypeHintInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHintInput"></a>

```go
func TypeHintInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TypeHint`<sup>Required</sup> <a name="TypeHint" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHint"></a>

```go
func TypeHint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resetAlias"></a>

```go
func ResetAlias()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList <a name="DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.get"></a>

```go
func Get(index *f64) DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.putLeft">PutLeft</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.putRight">PutRight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetInstruction">ResetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetRelationshipType">ResetRelationshipType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLeft` <a name="PutLeft" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.putLeft"></a>

```go
func PutLeft(value DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.putLeft.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft</a>

---

##### `PutRight` <a name="PutRight" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.putRight"></a>

```go
func PutRight(value DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.putRight.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetInstruction` <a name="ResetInstruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetInstruction"></a>

```go
func ResetInstruction()
```

##### `ResetRelationshipType` <a name="ResetRelationshipType" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetRelationshipType"></a>

```go
func ResetRelationshipType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.left">Left</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.right">Right</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.instructionInput">InstructionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.leftInput">LeftInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.relationshipTypeInput">RelationshipTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.rightInput">RightInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.sqlInput">SqlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.instruction">Instruction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.relationshipType">RelationshipType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.sql">Sql</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Left`<sup>Required</sup> <a name="Left" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.left"></a>

```go
func Left() DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference</a>

---

##### `Right`<sup>Required</sup> <a name="Right" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.right"></a>

```go
func Right() DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstructionInput`<sup>Optional</sup> <a name="InstructionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.instructionInput"></a>

```go
func InstructionInput() *string
```

- *Type:* *string

---

##### `LeftInput`<sup>Optional</sup> <a name="LeftInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.leftInput"></a>

```go
func LeftInput() DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft</a>

---

##### `RelationshipTypeInput`<sup>Optional</sup> <a name="RelationshipTypeInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.relationshipTypeInput"></a>

```go
func RelationshipTypeInput() *string
```

- *Type:* *string

---

##### `RightInput`<sup>Optional</sup> <a name="RightInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.rightInput"></a>

```go
func RightInput() DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight</a>

---

##### `SqlInput`<sup>Optional</sup> <a name="SqlInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.sqlInput"></a>

```go
func SqlInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instruction`<sup>Required</sup> <a name="Instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.instruction"></a>

```go
func Instruction() *string
```

- *Type:* *string

---

##### `RelationshipType`<sup>Required</sup> <a name="RelationshipType" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.relationshipType"></a>

```go
func RelationshipType() *string
```

- *Type:* *string

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.sql"></a>

```go
func Sql() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resetAlias"></a>

```go
func ResetAlias()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionInstructionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksGenieAgentDefinitionInstructionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putExampleQuestionSqls">PutExampleQuestionSqls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putJoinSpecs">PutJoinSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putSqlFunctions">PutSqlFunctions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putSqlSnippets">PutSqlSnippets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putTextInstructions">PutTextInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetExampleQuestionSqls">ResetExampleQuestionSqls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetJoinSpecs">ResetJoinSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetSqlFunctions">ResetSqlFunctions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetSqlSnippets">ResetSqlSnippets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetTextInstructions">ResetTextInstructions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExampleQuestionSqls` <a name="PutExampleQuestionSqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putExampleQuestionSqls"></a>

```go
func PutExampleQuestionSqls(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putExampleQuestionSqls.parameter.value"></a>

- *Type:* interface{}

---

##### `PutJoinSpecs` <a name="PutJoinSpecs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putJoinSpecs"></a>

```go
func PutJoinSpecs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putJoinSpecs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSqlFunctions` <a name="PutSqlFunctions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putSqlFunctions"></a>

```go
func PutSqlFunctions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putSqlFunctions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSqlSnippets` <a name="PutSqlSnippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putSqlSnippets"></a>

```go
func PutSqlSnippets(value DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putSqlSnippets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets</a>

---

##### `PutTextInstructions` <a name="PutTextInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putTextInstructions"></a>

```go
func PutTextInstructions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putTextInstructions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExampleQuestionSqls` <a name="ResetExampleQuestionSqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetExampleQuestionSqls"></a>

```go
func ResetExampleQuestionSqls()
```

##### `ResetJoinSpecs` <a name="ResetJoinSpecs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetJoinSpecs"></a>

```go
func ResetJoinSpecs()
```

##### `ResetSqlFunctions` <a name="ResetSqlFunctions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetSqlFunctions"></a>

```go
func ResetSqlFunctions()
```

##### `ResetSqlSnippets` <a name="ResetSqlSnippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetSqlSnippets"></a>

```go
func ResetSqlSnippets()
```

##### `ResetTextInstructions` <a name="ResetTextInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetTextInstructions"></a>

```go
func ResetTextInstructions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.exampleQuestionSqls">ExampleQuestionSqls</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.joinSpecs">JoinSpecs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.sqlFunctions">SqlFunctions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.sqlSnippets">SqlSnippets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.textInstructions">TextInstructions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList">DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.exampleQuestionSqlsInput">ExampleQuestionSqlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.joinSpecsInput">JoinSpecsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.sqlFunctionsInput">SqlFunctionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.sqlSnippetsInput">SqlSnippetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.textInstructionsInput">TextInstructionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExampleQuestionSqls`<sup>Required</sup> <a name="ExampleQuestionSqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.exampleQuestionSqls"></a>

```go
func ExampleQuestionSqls() DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList</a>

---

##### `JoinSpecs`<sup>Required</sup> <a name="JoinSpecs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.joinSpecs"></a>

```go
func JoinSpecs() DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList</a>

---

##### `SqlFunctions`<sup>Required</sup> <a name="SqlFunctions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.sqlFunctions"></a>

```go
func SqlFunctions() DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList</a>

---

##### `SqlSnippets`<sup>Required</sup> <a name="SqlSnippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.sqlSnippets"></a>

```go
func SqlSnippets() DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference</a>

---

##### `TextInstructions`<sup>Required</sup> <a name="TextInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.textInstructions"></a>

```go
func TextInstructions() DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList">DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList</a>

---

##### `ExampleQuestionSqlsInput`<sup>Optional</sup> <a name="ExampleQuestionSqlsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.exampleQuestionSqlsInput"></a>

```go
func ExampleQuestionSqlsInput() interface{}
```

- *Type:* interface{}

---

##### `JoinSpecsInput`<sup>Optional</sup> <a name="JoinSpecsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.joinSpecsInput"></a>

```go
func JoinSpecsInput() interface{}
```

- *Type:* interface{}

---

##### `SqlFunctionsInput`<sup>Optional</sup> <a name="SqlFunctionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.sqlFunctionsInput"></a>

```go
func SqlFunctionsInput() interface{}
```

- *Type:* interface{}

---

##### `SqlSnippetsInput`<sup>Optional</sup> <a name="SqlSnippetsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.sqlSnippetsInput"></a>

```go
func SqlSnippetsInput() interface{}
```

- *Type:* interface{}

---

##### `TextInstructionsInput`<sup>Optional</sup> <a name="TextInstructionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.textInstructionsInput"></a>

```go
func TextInstructionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.get"></a>

```go
func Get(index *f64) DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.get"></a>

```go
func Get(index *f64) DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetInstruction">ResetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetSynonyms">ResetSynonyms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetInstruction` <a name="ResetInstruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetInstruction"></a>

```go
func ResetInstruction()
```

##### `ResetSynonyms` <a name="ResetSynonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetSynonyms"></a>

```go
func ResetSynonyms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instructionInput">InstructionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sqlInput">SqlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonymsInput">SynonymsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instruction">Instruction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sql">Sql</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonyms">Synonyms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstructionInput`<sup>Optional</sup> <a name="InstructionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instructionInput"></a>

```go
func InstructionInput() *string
```

- *Type:* *string

---

##### `SqlInput`<sup>Optional</sup> <a name="SqlInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sqlInput"></a>

```go
func SqlInput() *string
```

- *Type:* *string

---

##### `SynonymsInput`<sup>Optional</sup> <a name="SynonymsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonymsInput"></a>

```go
func SynonymsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instruction`<sup>Required</sup> <a name="Instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instruction"></a>

```go
func Instruction() *string
```

- *Type:* *string

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sql"></a>

```go
func Sql() *string
```

- *Type:* *string

---

##### `Synonyms`<sup>Required</sup> <a name="Synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonyms"></a>

```go
func Synonyms() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.get"></a>

```go
func Get(index *f64) DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetInstruction">ResetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetSynonyms">ResetSynonyms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetInstruction` <a name="ResetInstruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetInstruction"></a>

```go
func ResetInstruction()
```

##### `ResetSynonyms` <a name="ResetSynonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetSynonyms"></a>

```go
func ResetSynonyms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instructionInput">InstructionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sqlInput">SqlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonymsInput">SynonymsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instruction">Instruction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sql">Sql</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonyms">Synonyms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstructionInput`<sup>Optional</sup> <a name="InstructionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instructionInput"></a>

```go
func InstructionInput() *string
```

- *Type:* *string

---

##### `SqlInput`<sup>Optional</sup> <a name="SqlInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sqlInput"></a>

```go
func SqlInput() *string
```

- *Type:* *string

---

##### `SynonymsInput`<sup>Optional</sup> <a name="SynonymsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonymsInput"></a>

```go
func SynonymsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instruction`<sup>Required</sup> <a name="Instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instruction"></a>

```go
func Instruction() *string
```

- *Type:* *string

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sql"></a>

```go
func Sql() *string
```

- *Type:* *string

---

##### `Synonyms`<sup>Required</sup> <a name="Synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonyms"></a>

```go
func Synonyms() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.get"></a>

```go
func Get(index *f64) DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetInstruction">ResetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetSynonyms">ResetSynonyms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetInstruction` <a name="ResetInstruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetInstruction"></a>

```go
func ResetInstruction()
```

##### `ResetSynonyms` <a name="ResetSynonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetSynonyms"></a>

```go
func ResetSynonyms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instructionInput">InstructionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sqlInput">SqlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonymsInput">SynonymsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instruction">Instruction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sql">Sql</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonyms">Synonyms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstructionInput`<sup>Optional</sup> <a name="InstructionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instructionInput"></a>

```go
func InstructionInput() *string
```

- *Type:* *string

---

##### `SqlInput`<sup>Optional</sup> <a name="SqlInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sqlInput"></a>

```go
func SqlInput() *string
```

- *Type:* *string

---

##### `SynonymsInput`<sup>Optional</sup> <a name="SynonymsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonymsInput"></a>

```go
func SynonymsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instruction`<sup>Required</sup> <a name="Instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instruction"></a>

```go
func Instruction() *string
```

- *Type:* *string

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sql"></a>

```go
func Sql() *string
```

- *Type:* *string

---

##### `Synonyms`<sup>Required</sup> <a name="Synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonyms"></a>

```go
func Synonyms() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putExpressions">PutExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putMeasures">PutMeasures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetExpressions">ResetExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetMeasures">ResetMeasures</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpressions` <a name="PutExpressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putExpressions"></a>

```go
func PutExpressions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putExpressions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFilters` <a name="PutFilters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putFilters"></a>

```go
func PutFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putFilters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMeasures` <a name="PutMeasures" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putMeasures"></a>

```go
func PutMeasures(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putMeasures.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExpressions` <a name="ResetExpressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetExpressions"></a>

```go
func ResetExpressions()
```

##### `ResetFilters` <a name="ResetFilters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetFilters"></a>

```go
func ResetFilters()
```

##### `ResetMeasures` <a name="ResetMeasures" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetMeasures"></a>

```go
func ResetMeasures()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.expressions">Expressions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.measures">Measures</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.expressionsInput">ExpressionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.filtersInput">FiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.measuresInput">MeasuresInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expressions`<sup>Required</sup> <a name="Expressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.expressions"></a>

```go
func Expressions() DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList</a>

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.filters"></a>

```go
func Filters() DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList</a>

---

##### `Measures`<sup>Required</sup> <a name="Measures" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.measures"></a>

```go
func Measures() DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList</a>

---

##### `ExpressionsInput`<sup>Optional</sup> <a name="ExpressionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.expressionsInput"></a>

```go
func ExpressionsInput() interface{}
```

- *Type:* interface{}

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.filtersInput"></a>

```go
func FiltersInput() interface{}
```

- *Type:* interface{}

---

##### `MeasuresInput`<sup>Optional</sup> <a name="MeasuresInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.measuresInput"></a>

```go
func MeasuresInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList <a name="DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.get"></a>

```go
func Get(index *f64) DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksGenieAgentDefinitionOutputReference <a name="DataDatabricksGenieAgentDefinitionOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksGenieAgentDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putBenchmarks">PutBenchmarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putDataSources">PutDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putInstructions">PutInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resetBenchmarks">ResetBenchmarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resetDataSources">ResetDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resetInstructions">ResetInstructions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBenchmarks` <a name="PutBenchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putBenchmarks"></a>

```go
func PutBenchmarks(value DataDatabricksGenieAgentDefinitionBenchmarks)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putBenchmarks.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks">DataDatabricksGenieAgentDefinitionBenchmarks</a>

---

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putConfig"></a>

```go
func PutConfig(value DataDatabricksGenieAgentDefinitionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig">DataDatabricksGenieAgentDefinitionConfig</a>

---

##### `PutDataSources` <a name="PutDataSources" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putDataSources"></a>

```go
func PutDataSources(value DataDatabricksGenieAgentDefinitionDataSources)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putDataSources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources">DataDatabricksGenieAgentDefinitionDataSources</a>

---

##### `PutInstructions` <a name="PutInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putInstructions"></a>

```go
func PutInstructions(value DataDatabricksGenieAgentDefinitionInstructions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putInstructions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions">DataDatabricksGenieAgentDefinitionInstructions</a>

---

##### `ResetBenchmarks` <a name="ResetBenchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resetBenchmarks"></a>

```go
func ResetBenchmarks()
```

##### `ResetConfig` <a name="ResetConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetDataSources` <a name="ResetDataSources" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resetDataSources"></a>

```go
func ResetDataSources()
```

##### `ResetInstructions` <a name="ResetInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resetInstructions"></a>

```go
func ResetInstructions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.benchmarks">Benchmarks</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference">DataDatabricksGenieAgentDefinitionBenchmarksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference">DataDatabricksGenieAgentDefinitionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.dataSources">DataSources</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference">DataDatabricksGenieAgentDefinitionDataSourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.instructions">Instructions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference">DataDatabricksGenieAgentDefinitionInstructionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.benchmarksInput">BenchmarksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.configInput">ConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.dataSourcesInput">DataSourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.instructionsInput">InstructionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition">DataDatabricksGenieAgentDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Benchmarks`<sup>Required</sup> <a name="Benchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.benchmarks"></a>

```go
func Benchmarks() DataDatabricksGenieAgentDefinitionBenchmarksOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference">DataDatabricksGenieAgentDefinitionBenchmarksOutputReference</a>

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.config"></a>

```go
func Config() DataDatabricksGenieAgentDefinitionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference">DataDatabricksGenieAgentDefinitionConfigOutputReference</a>

---

##### `DataSources`<sup>Required</sup> <a name="DataSources" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.dataSources"></a>

```go
func DataSources() DataDatabricksGenieAgentDefinitionDataSourcesOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference">DataDatabricksGenieAgentDefinitionDataSourcesOutputReference</a>

---

##### `Instructions`<sup>Required</sup> <a name="Instructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.instructions"></a>

```go
func Instructions() DataDatabricksGenieAgentDefinitionInstructionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference">DataDatabricksGenieAgentDefinitionInstructionsOutputReference</a>

---

##### `BenchmarksInput`<sup>Optional</sup> <a name="BenchmarksInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.benchmarksInput"></a>

```go
func BenchmarksInput() interface{}
```

- *Type:* interface{}

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.configInput"></a>

```go
func ConfigInput() interface{}
```

- *Type:* interface{}

---

##### `DataSourcesInput`<sup>Optional</sup> <a name="DataSourcesInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.dataSourcesInput"></a>

```go
func DataSourcesInput() interface{}
```

- *Type:* interface{}

---

##### `InstructionsInput`<sup>Optional</sup> <a name="InstructionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.instructionsInput"></a>

```go
func InstructionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksGenieAgentDefinition
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition">DataDatabricksGenieAgentDefinition</a>

---


### DataDatabricksGenieAgentProviderConfigOutputReference <a name="DataDatabricksGenieAgentProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksgenieagent"

datadatabricksgenieagent.NewDataDatabricksGenieAgentProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksGenieAgentProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



