# `dataDatabricksAiSearchEndpoint` Submodule <a name="`dataDatabricksAiSearchEndpoint` Submodule" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAiSearchEndpoint <a name="DataDatabricksAiSearchEndpoint" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_search_endpoint databricks_ai_search_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaisearchendpoint"

datadatabricksaisearchendpoint.NewDataDatabricksAiSearchEndpoint(scope Construct, id *string, config DataDatabricksAiSearchEndpointConfig) DataDatabricksAiSearchEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig">DataDatabricksAiSearchEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig">DataDatabricksAiSearchEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksAiSearchEndpointProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig">DataDatabricksAiSearchEndpointProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAiSearchEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaisearchendpoint"

datadatabricksaisearchendpoint.DataDatabricksAiSearchEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaisearchendpoint"

datadatabricksaisearchendpoint.DataDatabricksAiSearchEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaisearchendpoint"

datadatabricksaisearchendpoint.DataDatabricksAiSearchEndpoint_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaisearchendpoint"

datadatabricksaisearchendpoint.DataDatabricksAiSearchEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksAiSearchEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksAiSearchEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksAiSearchEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_search_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAiSearchEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.budgetPolicyId">BudgetPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.creator">Creator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.customTags">CustomTags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList">DataDatabricksAiSearchEndpointCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.effectiveBudgetPolicyId">EffectiveBudgetPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.endpointStatus">EndpointStatus</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference">DataDatabricksAiSearchEndpointEndpointStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.endpointType">EndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.indexCount">IndexCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.lastUpdatedUser">LastUpdatedUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference">DataDatabricksAiSearchEndpointProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.replicaCount">ReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.scalingInfo">ScalingInfo</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference">DataDatabricksAiSearchEndpointScalingInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.targetQps">TargetQps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.throughputInfo">ThroughputInfo</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference">DataDatabricksAiSearchEndpointThroughputInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.usagePolicyId">UsagePolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `BudgetPolicyId`<sup>Required</sup> <a name="BudgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.budgetPolicyId"></a>

```go
func BudgetPolicyId() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.creator"></a>

```go
func Creator() *string
```

- *Type:* *string

---

##### `CustomTags`<sup>Required</sup> <a name="CustomTags" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.customTags"></a>

```go
func CustomTags() DataDatabricksAiSearchEndpointCustomTagsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList">DataDatabricksAiSearchEndpointCustomTagsList</a>

---

##### `EffectiveBudgetPolicyId`<sup>Required</sup> <a name="EffectiveBudgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.effectiveBudgetPolicyId"></a>

```go
func EffectiveBudgetPolicyId() *string
```

- *Type:* *string

---

##### `EndpointStatus`<sup>Required</sup> <a name="EndpointStatus" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.endpointStatus"></a>

```go
func EndpointStatus() DataDatabricksAiSearchEndpointEndpointStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference">DataDatabricksAiSearchEndpointEndpointStatusOutputReference</a>

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.endpointType"></a>

```go
func EndpointType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IndexCount`<sup>Required</sup> <a name="IndexCount" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.indexCount"></a>

```go
func IndexCount() *f64
```

- *Type:* *f64

---

##### `LastUpdatedUser`<sup>Required</sup> <a name="LastUpdatedUser" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.lastUpdatedUser"></a>

```go
func LastUpdatedUser() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksAiSearchEndpointProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference">DataDatabricksAiSearchEndpointProviderConfigOutputReference</a>

---

##### `ReplicaCount`<sup>Required</sup> <a name="ReplicaCount" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.replicaCount"></a>

```go
func ReplicaCount() *f64
```

- *Type:* *f64

---

##### `ScalingInfo`<sup>Required</sup> <a name="ScalingInfo" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.scalingInfo"></a>

```go
func ScalingInfo() DataDatabricksAiSearchEndpointScalingInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference">DataDatabricksAiSearchEndpointScalingInfoOutputReference</a>

---

##### `TargetQps`<sup>Required</sup> <a name="TargetQps" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.targetQps"></a>

```go
func TargetQps() *f64
```

- *Type:* *f64

---

##### `ThroughputInfo`<sup>Required</sup> <a name="ThroughputInfo" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.throughputInfo"></a>

```go
func ThroughputInfo() DataDatabricksAiSearchEndpointThroughputInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference">DataDatabricksAiSearchEndpointThroughputInfoOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `UsagePolicyId`<sup>Required</sup> <a name="UsagePolicyId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.usagePolicyId"></a>

```go
func UsagePolicyId() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAiSearchEndpointConfig <a name="DataDatabricksAiSearchEndpointConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaisearchendpoint"

&datadatabricksaisearchendpoint.DataDatabricksAiSearchEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_search_endpoint#name DataDatabricksAiSearchEndpoint#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig">DataDatabricksAiSearchEndpointProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_search_endpoint#provider_config DataDatabricksAiSearchEndpoint#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_search_endpoint#name DataDatabricksAiSearchEndpoint#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksAiSearchEndpointProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig">DataDatabricksAiSearchEndpointProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_search_endpoint#provider_config DataDatabricksAiSearchEndpoint#provider_config}.

---

### DataDatabricksAiSearchEndpointCustomTags <a name="DataDatabricksAiSearchEndpointCustomTags" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaisearchendpoint"

&datadatabricksaisearchendpoint.DataDatabricksAiSearchEndpointCustomTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_search_endpoint#key DataDatabricksAiSearchEndpoint#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_search_endpoint#value DataDatabricksAiSearchEndpoint#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_search_endpoint#key DataDatabricksAiSearchEndpoint#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_search_endpoint#value DataDatabricksAiSearchEndpoint#value}.

---

### DataDatabricksAiSearchEndpointEndpointStatus <a name="DataDatabricksAiSearchEndpointEndpointStatus" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaisearchendpoint"

&datadatabricksaisearchendpoint.DataDatabricksAiSearchEndpointEndpointStatus {

}
```


### DataDatabricksAiSearchEndpointProviderConfig <a name="DataDatabricksAiSearchEndpointProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaisearchendpoint"

&datadatabricksaisearchendpoint.DataDatabricksAiSearchEndpointProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_search_endpoint#workspace_id DataDatabricksAiSearchEndpoint#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_search_endpoint#workspace_id DataDatabricksAiSearchEndpoint#workspace_id}.

---

### DataDatabricksAiSearchEndpointScalingInfo <a name="DataDatabricksAiSearchEndpointScalingInfo" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaisearchendpoint"

&datadatabricksaisearchendpoint.DataDatabricksAiSearchEndpointScalingInfo {
	RequestedTargetQps: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfo.property.requestedTargetQps">RequestedTargetQps</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_search_endpoint#requested_target_qps DataDatabricksAiSearchEndpoint#requested_target_qps}. |

---

##### `RequestedTargetQps`<sup>Optional</sup> <a name="RequestedTargetQps" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfo.property.requestedTargetQps"></a>

```go
RequestedTargetQps *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_search_endpoint#requested_target_qps DataDatabricksAiSearchEndpoint#requested_target_qps}.

---

### DataDatabricksAiSearchEndpointThroughputInfo <a name="DataDatabricksAiSearchEndpointThroughputInfo" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaisearchendpoint"

&datadatabricksaisearchendpoint.DataDatabricksAiSearchEndpointThroughputInfo {
	MaximumConcurrencyAllowed: *f64,
	MinimalConcurrencyAllowed: *f64,
	RequestedConcurrency: *f64,
	RequestedNumReplicas: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo.property.maximumConcurrencyAllowed">MaximumConcurrencyAllowed</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_search_endpoint#maximum_concurrency_allowed DataDatabricksAiSearchEndpoint#maximum_concurrency_allowed}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo.property.minimalConcurrencyAllowed">MinimalConcurrencyAllowed</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_search_endpoint#minimal_concurrency_allowed DataDatabricksAiSearchEndpoint#minimal_concurrency_allowed}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo.property.requestedConcurrency">RequestedConcurrency</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_search_endpoint#requested_concurrency DataDatabricksAiSearchEndpoint#requested_concurrency}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo.property.requestedNumReplicas">RequestedNumReplicas</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_search_endpoint#requested_num_replicas DataDatabricksAiSearchEndpoint#requested_num_replicas}. |

---

##### `MaximumConcurrencyAllowed`<sup>Optional</sup> <a name="MaximumConcurrencyAllowed" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo.property.maximumConcurrencyAllowed"></a>

```go
MaximumConcurrencyAllowed *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_search_endpoint#maximum_concurrency_allowed DataDatabricksAiSearchEndpoint#maximum_concurrency_allowed}.

---

##### `MinimalConcurrencyAllowed`<sup>Optional</sup> <a name="MinimalConcurrencyAllowed" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo.property.minimalConcurrencyAllowed"></a>

```go
MinimalConcurrencyAllowed *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_search_endpoint#minimal_concurrency_allowed DataDatabricksAiSearchEndpoint#minimal_concurrency_allowed}.

---

##### `RequestedConcurrency`<sup>Optional</sup> <a name="RequestedConcurrency" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo.property.requestedConcurrency"></a>

```go
RequestedConcurrency *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_search_endpoint#requested_concurrency DataDatabricksAiSearchEndpoint#requested_concurrency}.

---

##### `RequestedNumReplicas`<sup>Optional</sup> <a name="RequestedNumReplicas" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo.property.requestedNumReplicas"></a>

```go
RequestedNumReplicas *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_search_endpoint#requested_num_replicas DataDatabricksAiSearchEndpoint#requested_num_replicas}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAiSearchEndpointCustomTagsList <a name="DataDatabricksAiSearchEndpointCustomTagsList" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaisearchendpoint"

datadatabricksaisearchendpoint.NewDataDatabricksAiSearchEndpointCustomTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksAiSearchEndpointCustomTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.get"></a>

```go
func Get(index *f64) DataDatabricksAiSearchEndpointCustomTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiSearchEndpointCustomTagsOutputReference <a name="DataDatabricksAiSearchEndpointCustomTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaisearchendpoint"

datadatabricksaisearchendpoint.NewDataDatabricksAiSearchEndpointCustomTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksAiSearchEndpointCustomTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTags">DataDatabricksAiSearchEndpointCustomTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAiSearchEndpointCustomTags
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTags">DataDatabricksAiSearchEndpointCustomTags</a>

---


### DataDatabricksAiSearchEndpointEndpointStatusOutputReference <a name="DataDatabricksAiSearchEndpointEndpointStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaisearchendpoint"

datadatabricksaisearchendpoint.NewDataDatabricksAiSearchEndpointEndpointStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiSearchEndpointEndpointStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatus">DataDatabricksAiSearchEndpointEndpointStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAiSearchEndpointEndpointStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatus">DataDatabricksAiSearchEndpointEndpointStatus</a>

---


### DataDatabricksAiSearchEndpointProviderConfigOutputReference <a name="DataDatabricksAiSearchEndpointProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaisearchendpoint"

datadatabricksaisearchendpoint.NewDataDatabricksAiSearchEndpointProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiSearchEndpointProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiSearchEndpointScalingInfoOutputReference <a name="DataDatabricksAiSearchEndpointScalingInfoOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaisearchendpoint"

datadatabricksaisearchendpoint.NewDataDatabricksAiSearchEndpointScalingInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiSearchEndpointScalingInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.resetRequestedTargetQps">ResetRequestedTargetQps</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRequestedTargetQps` <a name="ResetRequestedTargetQps" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.resetRequestedTargetQps"></a>

```go
func ResetRequestedTargetQps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.requestedTargetQpsInput">RequestedTargetQpsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.requestedTargetQps">RequestedTargetQps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfo">DataDatabricksAiSearchEndpointScalingInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `RequestedTargetQpsInput`<sup>Optional</sup> <a name="RequestedTargetQpsInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.requestedTargetQpsInput"></a>

```go
func RequestedTargetQpsInput() *f64
```

- *Type:* *f64

---

##### `RequestedTargetQps`<sup>Required</sup> <a name="RequestedTargetQps" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.requestedTargetQps"></a>

```go
func RequestedTargetQps() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAiSearchEndpointScalingInfo
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfo">DataDatabricksAiSearchEndpointScalingInfo</a>

---


### DataDatabricksAiSearchEndpointThroughputInfoOutputReference <a name="DataDatabricksAiSearchEndpointThroughputInfoOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaisearchendpoint"

datadatabricksaisearchendpoint.NewDataDatabricksAiSearchEndpointThroughputInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiSearchEndpointThroughputInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resetMaximumConcurrencyAllowed">ResetMaximumConcurrencyAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resetMinimalConcurrencyAllowed">ResetMinimalConcurrencyAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resetRequestedConcurrency">ResetRequestedConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resetRequestedNumReplicas">ResetRequestedNumReplicas</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumConcurrencyAllowed` <a name="ResetMaximumConcurrencyAllowed" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resetMaximumConcurrencyAllowed"></a>

```go
func ResetMaximumConcurrencyAllowed()
```

##### `ResetMinimalConcurrencyAllowed` <a name="ResetMinimalConcurrencyAllowed" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resetMinimalConcurrencyAllowed"></a>

```go
func ResetMinimalConcurrencyAllowed()
```

##### `ResetRequestedConcurrency` <a name="ResetRequestedConcurrency" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resetRequestedConcurrency"></a>

```go
func ResetRequestedConcurrency()
```

##### `ResetRequestedNumReplicas` <a name="ResetRequestedNumReplicas" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resetRequestedNumReplicas"></a>

```go
func ResetRequestedNumReplicas()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.changeRequestMessage">ChangeRequestMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.changeRequestState">ChangeRequestState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.currentConcurrency">CurrentConcurrency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.currentConcurrencyUtilizationPercentage">CurrentConcurrencyUtilizationPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.currentNumReplicas">CurrentNumReplicas</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.maximumConcurrencyAllowedInput">MaximumConcurrencyAllowedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.minimalConcurrencyAllowedInput">MinimalConcurrencyAllowedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.requestedConcurrencyInput">RequestedConcurrencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.requestedNumReplicasInput">RequestedNumReplicasInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.maximumConcurrencyAllowed">MaximumConcurrencyAllowed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.minimalConcurrencyAllowed">MinimalConcurrencyAllowed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.requestedConcurrency">RequestedConcurrency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.requestedNumReplicas">RequestedNumReplicas</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo">DataDatabricksAiSearchEndpointThroughputInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChangeRequestMessage`<sup>Required</sup> <a name="ChangeRequestMessage" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.changeRequestMessage"></a>

```go
func ChangeRequestMessage() *string
```

- *Type:* *string

---

##### `ChangeRequestState`<sup>Required</sup> <a name="ChangeRequestState" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.changeRequestState"></a>

```go
func ChangeRequestState() *string
```

- *Type:* *string

---

##### `CurrentConcurrency`<sup>Required</sup> <a name="CurrentConcurrency" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.currentConcurrency"></a>

```go
func CurrentConcurrency() *f64
```

- *Type:* *f64

---

##### `CurrentConcurrencyUtilizationPercentage`<sup>Required</sup> <a name="CurrentConcurrencyUtilizationPercentage" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.currentConcurrencyUtilizationPercentage"></a>

```go
func CurrentConcurrencyUtilizationPercentage() *f64
```

- *Type:* *f64

---

##### `CurrentNumReplicas`<sup>Required</sup> <a name="CurrentNumReplicas" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.currentNumReplicas"></a>

```go
func CurrentNumReplicas() *f64
```

- *Type:* *f64

---

##### `MaximumConcurrencyAllowedInput`<sup>Optional</sup> <a name="MaximumConcurrencyAllowedInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.maximumConcurrencyAllowedInput"></a>

```go
func MaximumConcurrencyAllowedInput() *f64
```

- *Type:* *f64

---

##### `MinimalConcurrencyAllowedInput`<sup>Optional</sup> <a name="MinimalConcurrencyAllowedInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.minimalConcurrencyAllowedInput"></a>

```go
func MinimalConcurrencyAllowedInput() *f64
```

- *Type:* *f64

---

##### `RequestedConcurrencyInput`<sup>Optional</sup> <a name="RequestedConcurrencyInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.requestedConcurrencyInput"></a>

```go
func RequestedConcurrencyInput() *f64
```

- *Type:* *f64

---

##### `RequestedNumReplicasInput`<sup>Optional</sup> <a name="RequestedNumReplicasInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.requestedNumReplicasInput"></a>

```go
func RequestedNumReplicasInput() *f64
```

- *Type:* *f64

---

##### `MaximumConcurrencyAllowed`<sup>Required</sup> <a name="MaximumConcurrencyAllowed" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.maximumConcurrencyAllowed"></a>

```go
func MaximumConcurrencyAllowed() *f64
```

- *Type:* *f64

---

##### `MinimalConcurrencyAllowed`<sup>Required</sup> <a name="MinimalConcurrencyAllowed" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.minimalConcurrencyAllowed"></a>

```go
func MinimalConcurrencyAllowed() *f64
```

- *Type:* *f64

---

##### `RequestedConcurrency`<sup>Required</sup> <a name="RequestedConcurrency" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.requestedConcurrency"></a>

```go
func RequestedConcurrency() *f64
```

- *Type:* *f64

---

##### `RequestedNumReplicas`<sup>Required</sup> <a name="RequestedNumReplicas" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.requestedNumReplicas"></a>

```go
func RequestedNumReplicas() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAiSearchEndpointThroughputInfo
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo">DataDatabricksAiSearchEndpointThroughputInfo</a>

---



