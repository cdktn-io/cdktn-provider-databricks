# `dataDatabricksAiGatewayMcpService` Submodule <a name="`dataDatabricksAiGatewayMcpService` Submodule" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAiGatewayMcpService <a name="DataDatabricksAiGatewayMcpService" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_mcp_service databricks_ai_gateway_mcp_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymcpservice"

datadatabricksaigatewaymcpservice.NewDataDatabricksAiGatewayMcpService(scope Construct, id *string, config DataDatabricksAiGatewayMcpServiceConfig) DataDatabricksAiGatewayMcpService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig">DataDatabricksAiGatewayMcpServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig">DataDatabricksAiGatewayMcpServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksAiGatewayMcpServiceProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfig">DataDatabricksAiGatewayMcpServiceProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAiGatewayMcpService resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymcpservice"

datadatabricksaigatewaymcpservice.DataDatabricksAiGatewayMcpService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymcpservice"

datadatabricksaigatewaymcpservice.DataDatabricksAiGatewayMcpService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymcpservice"

datadatabricksaigatewaymcpservice.DataDatabricksAiGatewayMcpService_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymcpservice"

datadatabricksaigatewaymcpservice.DataDatabricksAiGatewayMcpService_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksAiGatewayMcpService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksAiGatewayMcpService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksAiGatewayMcpService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_mcp_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAiGatewayMcpService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.browseOnly">BrowseOnly</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference">DataDatabricksAiGatewayMcpServiceConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.effectiveOwner">EffectiveOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.metastoreId">MetastoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference">DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `BrowseOnly`<sup>Required</sup> <a name="BrowseOnly" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.browseOnly"></a>

```go
func BrowseOnly() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.config"></a>

```go
func Config() DataDatabricksAiGatewayMcpServiceConfigAOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference">DataDatabricksAiGatewayMcpServiceConfigAOutputReference</a>

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveOwner`<sup>Required</sup> <a name="EffectiveOwner" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.effectiveOwner"></a>

```go
func EffectiveOwner() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.metastoreId"></a>

```go
func MetastoreId() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference">DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference</a>

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAiGatewayMcpServiceConfig <a name="DataDatabricksAiGatewayMcpServiceConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymcpservice"

&datadatabricksaigatewaymcpservice.DataDatabricksAiGatewayMcpServiceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_mcp_service#name DataDatabricksAiGatewayMcpService#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfig">DataDatabricksAiGatewayMcpServiceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_mcp_service#provider_config DataDatabricksAiGatewayMcpService#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_mcp_service#name DataDatabricksAiGatewayMcpService#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksAiGatewayMcpServiceProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfig">DataDatabricksAiGatewayMcpServiceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_mcp_service#provider_config DataDatabricksAiGatewayMcpService#provider_config}.

---

### DataDatabricksAiGatewayMcpServiceConfigA <a name="DataDatabricksAiGatewayMcpServiceConfigA" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigA.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymcpservice"

&datadatabricksaigatewaymcpservice.DataDatabricksAiGatewayMcpServiceConfigA {
	IncludeToolSelectors: *[]*string,
	RateLimits: interface{},
	SourceConnection: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnection,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigA.property.includeToolSelectors">IncludeToolSelectors</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_mcp_service#include_tool_selectors DataDatabricksAiGatewayMcpService#include_tool_selectors}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigA.property.rateLimits">RateLimits</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_mcp_service#rate_limits DataDatabricksAiGatewayMcpService#rate_limits}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigA.property.sourceConnection">SourceConnection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnection">DataDatabricksAiGatewayMcpServiceConfigSourceConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_mcp_service#source_connection DataDatabricksAiGatewayMcpService#source_connection}. |

---

##### `IncludeToolSelectors`<sup>Optional</sup> <a name="IncludeToolSelectors" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigA.property.includeToolSelectors"></a>

```go
IncludeToolSelectors *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_mcp_service#include_tool_selectors DataDatabricksAiGatewayMcpService#include_tool_selectors}.

---

##### `RateLimits`<sup>Optional</sup> <a name="RateLimits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigA.property.rateLimits"></a>

```go
RateLimits interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_mcp_service#rate_limits DataDatabricksAiGatewayMcpService#rate_limits}.

---

##### `SourceConnection`<sup>Optional</sup> <a name="SourceConnection" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigA.property.sourceConnection"></a>

```go
SourceConnection DataDatabricksAiGatewayMcpServiceConfigSourceConnection
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnection">DataDatabricksAiGatewayMcpServiceConfigSourceConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_mcp_service#source_connection DataDatabricksAiGatewayMcpService#source_connection}.

---

### DataDatabricksAiGatewayMcpServiceConfigRateLimits <a name="DataDatabricksAiGatewayMcpServiceConfigRateLimits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymcpservice"

&datadatabricksaigatewaymcpservice.DataDatabricksAiGatewayMcpServiceConfigRateLimits {
	Key: *string,
	RenewalPeriod: *string,
	Principal: *string,
	Requests: *f64,
	RequestTagKey: *string,
	RequestTagValue: *string,
	Tokens: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_mcp_service#key DataDatabricksAiGatewayMcpService#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits.property.renewalPeriod">RenewalPeriod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_mcp_service#renewal_period DataDatabricksAiGatewayMcpService#renewal_period}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits.property.principal">Principal</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_mcp_service#principal DataDatabricksAiGatewayMcpService#principal}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits.property.requests">Requests</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_mcp_service#requests DataDatabricksAiGatewayMcpService#requests}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits.property.requestTagKey">RequestTagKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_mcp_service#request_tag_key DataDatabricksAiGatewayMcpService#request_tag_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits.property.requestTagValue">RequestTagValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_mcp_service#request_tag_value DataDatabricksAiGatewayMcpService#request_tag_value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits.property.tokens">Tokens</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_mcp_service#tokens DataDatabricksAiGatewayMcpService#tokens}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_mcp_service#key DataDatabricksAiGatewayMcpService#key}.

---

##### `RenewalPeriod`<sup>Required</sup> <a name="RenewalPeriod" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits.property.renewalPeriod"></a>

```go
RenewalPeriod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_mcp_service#renewal_period DataDatabricksAiGatewayMcpService#renewal_period}.

---

##### `Principal`<sup>Optional</sup> <a name="Principal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits.property.principal"></a>

```go
Principal *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_mcp_service#principal DataDatabricksAiGatewayMcpService#principal}.

---

##### `Requests`<sup>Optional</sup> <a name="Requests" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits.property.requests"></a>

```go
Requests *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_mcp_service#requests DataDatabricksAiGatewayMcpService#requests}.

---

##### `RequestTagKey`<sup>Optional</sup> <a name="RequestTagKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits.property.requestTagKey"></a>

```go
RequestTagKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_mcp_service#request_tag_key DataDatabricksAiGatewayMcpService#request_tag_key}.

---

##### `RequestTagValue`<sup>Optional</sup> <a name="RequestTagValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits.property.requestTagValue"></a>

```go
RequestTagValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_mcp_service#request_tag_value DataDatabricksAiGatewayMcpService#request_tag_value}.

---

##### `Tokens`<sup>Optional</sup> <a name="Tokens" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits.property.tokens"></a>

```go
Tokens *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_mcp_service#tokens DataDatabricksAiGatewayMcpService#tokens}.

---

### DataDatabricksAiGatewayMcpServiceConfigSourceConnection <a name="DataDatabricksAiGatewayMcpServiceConfigSourceConnection" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymcpservice"

&datadatabricksaigatewaymcpservice.DataDatabricksAiGatewayMcpServiceConfigSourceConnection {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnection.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_mcp_service#name DataDatabricksAiGatewayMcpService#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnection.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_mcp_service#name DataDatabricksAiGatewayMcpService#name}.

---

### DataDatabricksAiGatewayMcpServiceProviderConfig <a name="DataDatabricksAiGatewayMcpServiceProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymcpservice"

&datadatabricksaigatewaymcpservice.DataDatabricksAiGatewayMcpServiceProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_mcp_service#workspace_id DataDatabricksAiGatewayMcpService#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_mcp_service#workspace_id DataDatabricksAiGatewayMcpService#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAiGatewayMcpServiceConfigAOutputReference <a name="DataDatabricksAiGatewayMcpServiceConfigAOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymcpservice"

datadatabricksaigatewaymcpservice.NewDataDatabricksAiGatewayMcpServiceConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayMcpServiceConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.putRateLimits">PutRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.putSourceConnection">PutSourceConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.resetIncludeToolSelectors">ResetIncludeToolSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.resetRateLimits">ResetRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.resetSourceConnection">ResetSourceConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRateLimits` <a name="PutRateLimits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.putRateLimits"></a>

```go
func PutRateLimits(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.putRateLimits.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSourceConnection` <a name="PutSourceConnection" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.putSourceConnection"></a>

```go
func PutSourceConnection(value DataDatabricksAiGatewayMcpServiceConfigSourceConnection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.putSourceConnection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnection">DataDatabricksAiGatewayMcpServiceConfigSourceConnection</a>

---

##### `ResetIncludeToolSelectors` <a name="ResetIncludeToolSelectors" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.resetIncludeToolSelectors"></a>

```go
func ResetIncludeToolSelectors()
```

##### `ResetRateLimits` <a name="ResetRateLimits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.resetRateLimits"></a>

```go
func ResetRateLimits()
```

##### `ResetSourceConnection` <a name="ResetSourceConnection" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.resetSourceConnection"></a>

```go
func ResetSourceConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.rateLimits">RateLimits</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList">DataDatabricksAiGatewayMcpServiceConfigRateLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.sourceConnection">SourceConnection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference">DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.includeToolSelectorsInput">IncludeToolSelectorsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.rateLimitsInput">RateLimitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.sourceConnectionInput">SourceConnectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.includeToolSelectors">IncludeToolSelectors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigA">DataDatabricksAiGatewayMcpServiceConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RateLimits`<sup>Required</sup> <a name="RateLimits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.rateLimits"></a>

```go
func RateLimits() DataDatabricksAiGatewayMcpServiceConfigRateLimitsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList">DataDatabricksAiGatewayMcpServiceConfigRateLimitsList</a>

---

##### `SourceConnection`<sup>Required</sup> <a name="SourceConnection" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.sourceConnection"></a>

```go
func SourceConnection() DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference">DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference</a>

---

##### `IncludeToolSelectorsInput`<sup>Optional</sup> <a name="IncludeToolSelectorsInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.includeToolSelectorsInput"></a>

```go
func IncludeToolSelectorsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RateLimitsInput`<sup>Optional</sup> <a name="RateLimitsInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.rateLimitsInput"></a>

```go
func RateLimitsInput() interface{}
```

- *Type:* interface{}

---

##### `SourceConnectionInput`<sup>Optional</sup> <a name="SourceConnectionInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.sourceConnectionInput"></a>

```go
func SourceConnectionInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeToolSelectors`<sup>Required</sup> <a name="IncludeToolSelectors" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.includeToolSelectors"></a>

```go
func IncludeToolSelectors() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAiGatewayMcpServiceConfigA
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigA">DataDatabricksAiGatewayMcpServiceConfigA</a>

---


### DataDatabricksAiGatewayMcpServiceConfigRateLimitsList <a name="DataDatabricksAiGatewayMcpServiceConfigRateLimitsList" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymcpservice"

datadatabricksaigatewaymcpservice.NewDataDatabricksAiGatewayMcpServiceConfigRateLimitsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksAiGatewayMcpServiceConfigRateLimitsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.get"></a>

```go
func Get(index *f64) DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference <a name="DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymcpservice"

datadatabricksaigatewaymcpservice.NewDataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.resetPrincipal">ResetPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.resetRequests">ResetRequests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.resetRequestTagKey">ResetRequestTagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.resetRequestTagValue">ResetRequestTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.resetTokens">ResetTokens</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrincipal` <a name="ResetPrincipal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.resetPrincipal"></a>

```go
func ResetPrincipal()
```

##### `ResetRequests` <a name="ResetRequests" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.resetRequests"></a>

```go
func ResetRequests()
```

##### `ResetRequestTagKey` <a name="ResetRequestTagKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.resetRequestTagKey"></a>

```go
func ResetRequestTagKey()
```

##### `ResetRequestTagValue` <a name="ResetRequestTagValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.resetRequestTagValue"></a>

```go
func ResetRequestTagValue()
```

##### `ResetTokens` <a name="ResetTokens" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.resetTokens"></a>

```go
func ResetTokens()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.principalInput">PrincipalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.renewalPeriodInput">RenewalPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestsInput">RequestsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestTagKeyInput">RequestTagKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestTagValueInput">RequestTagValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.tokensInput">TokensInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.renewalPeriod">RenewalPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.requests">Requests</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestTagKey">RequestTagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestTagValue">RequestTagValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.tokens">Tokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.principalInput"></a>

```go
func PrincipalInput() *string
```

- *Type:* *string

---

##### `RenewalPeriodInput`<sup>Optional</sup> <a name="RenewalPeriodInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.renewalPeriodInput"></a>

```go
func RenewalPeriodInput() *string
```

- *Type:* *string

---

##### `RequestsInput`<sup>Optional</sup> <a name="RequestsInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestsInput"></a>

```go
func RequestsInput() *f64
```

- *Type:* *f64

---

##### `RequestTagKeyInput`<sup>Optional</sup> <a name="RequestTagKeyInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestTagKeyInput"></a>

```go
func RequestTagKeyInput() *string
```

- *Type:* *string

---

##### `RequestTagValueInput`<sup>Optional</sup> <a name="RequestTagValueInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestTagValueInput"></a>

```go
func RequestTagValueInput() *string
```

- *Type:* *string

---

##### `TokensInput`<sup>Optional</sup> <a name="TokensInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.tokensInput"></a>

```go
func TokensInput() *f64
```

- *Type:* *f64

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `RenewalPeriod`<sup>Required</sup> <a name="RenewalPeriod" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.renewalPeriod"></a>

```go
func RenewalPeriod() *string
```

- *Type:* *string

---

##### `Requests`<sup>Required</sup> <a name="Requests" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.requests"></a>

```go
func Requests() *f64
```

- *Type:* *f64

---

##### `RequestTagKey`<sup>Required</sup> <a name="RequestTagKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestTagKey"></a>

```go
func RequestTagKey() *string
```

- *Type:* *string

---

##### `RequestTagValue`<sup>Required</sup> <a name="RequestTagValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestTagValue"></a>

```go
func RequestTagValue() *string
```

- *Type:* *string

---

##### `Tokens`<sup>Required</sup> <a name="Tokens" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.tokens"></a>

```go
func Tokens() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference <a name="DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymcpservice"

datadatabricksaigatewaymcpservice.NewDataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.property.isDeleted">IsDeleted</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsDeleted`<sup>Required</sup> <a name="IsDeleted" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.property.isDeleted"></a>

```go
func IsDeleted() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference <a name="DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymcpservice"

datadatabricksaigatewaymcpservice.NewDataDatabricksAiGatewayMcpServiceProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



