# `dataDatabricksAiGatewayModelProviderService` Submodule <a name="`dataDatabricksAiGatewayModelProviderService` Submodule" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAiGatewayModelProviderService <a name="DataDatabricksAiGatewayModelProviderService" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service databricks_ai_gateway_model_provider_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderService(scope Construct, id *string, config DataDatabricksAiGatewayModelProviderServiceConfig) DataDatabricksAiGatewayModelProviderService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig">DataDatabricksAiGatewayModelProviderServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig">DataDatabricksAiGatewayModelProviderServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksAiGatewayModelProviderServiceProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfig">DataDatabricksAiGatewayModelProviderServiceProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAiGatewayModelProviderService resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderService_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderService_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksAiGatewayModelProviderService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksAiGatewayModelProviderService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksAiGatewayModelProviderService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAiGatewayModelProviderService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.effectiveOwner">EffectiveOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.metastoreId">MetastoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference">DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.config"></a>

```go
func Config() DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference</a>

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveOwner`<sup>Required</sup> <a name="EffectiveOwner" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.effectiveOwner"></a>

```go
func EffectiveOwner() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.metastoreId"></a>

```go
func MetastoreId() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference">DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference</a>

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAiGatewayModelProviderServiceConfig <a name="DataDatabricksAiGatewayModelProviderServiceConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfig">DataDatabricksAiGatewayModelProviderServiceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#provider_config DataDatabricksAiGatewayModelProviderService#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksAiGatewayModelProviderServiceProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfig">DataDatabricksAiGatewayModelProviderServiceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#provider_config DataDatabricksAiGatewayModelProviderService#provider_config}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigA <a name="DataDatabricksAiGatewayModelProviderServiceConfigA" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigA {
	AllowAllTargets: interface{},
	AmazonBedrock: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock,
	Anthropic: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic,
	AzureOpenai: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai,
	Custom: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustom,
	ForwardHeaders: interface{},
	ForwardQueryParameters: interface{},
	ForwardUnmanagedPaths: interface{},
	GeminiEnterprise: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise,
	InferenceTable: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable,
	MicrosoftFoundry: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry,
	Openai: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenai,
	ProviderType: *string,
	RateLimits: interface{},
	Targets: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.allowAllTargets">AllowAllTargets</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#allow_all_targets DataDatabricksAiGatewayModelProviderService#allow_all_targets}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.amazonBedrock">AmazonBedrock</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#amazon_bedrock DataDatabricksAiGatewayModelProviderService#amazon_bedrock}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.anthropic">Anthropic</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic">DataDatabricksAiGatewayModelProviderServiceConfigAnthropic</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#anthropic DataDatabricksAiGatewayModelProviderService#anthropic}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.azureOpenai">AzureOpenai</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#azure_openai DataDatabricksAiGatewayModelProviderService#azure_openai}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.custom">Custom</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustom">DataDatabricksAiGatewayModelProviderServiceConfigCustom</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#custom DataDatabricksAiGatewayModelProviderService#custom}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.forwardHeaders">ForwardHeaders</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#forward_headers DataDatabricksAiGatewayModelProviderService#forward_headers}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.forwardQueryParameters">ForwardQueryParameters</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#forward_query_parameters DataDatabricksAiGatewayModelProviderService#forward_query_parameters}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.forwardUnmanagedPaths">ForwardUnmanagedPaths</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#forward_unmanaged_paths DataDatabricksAiGatewayModelProviderService#forward_unmanaged_paths}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.geminiEnterprise">GeminiEnterprise</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#gemini_enterprise DataDatabricksAiGatewayModelProviderService#gemini_enterprise}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.inferenceTable">InferenceTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable">DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#inference_table DataDatabricksAiGatewayModelProviderService#inference_table}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.microsoftFoundry">MicrosoftFoundry</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#microsoft_foundry DataDatabricksAiGatewayModelProviderService#microsoft_foundry}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.openai">Openai</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenai">DataDatabricksAiGatewayModelProviderServiceConfigOpenai</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#openai DataDatabricksAiGatewayModelProviderService#openai}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.providerType">ProviderType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#provider_type DataDatabricksAiGatewayModelProviderService#provider_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.rateLimits">RateLimits</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#rate_limits DataDatabricksAiGatewayModelProviderService#rate_limits}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.targets">Targets</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#targets DataDatabricksAiGatewayModelProviderService#targets}. |

---

##### `AllowAllTargets`<sup>Optional</sup> <a name="AllowAllTargets" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.allowAllTargets"></a>

```go
AllowAllTargets interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#allow_all_targets DataDatabricksAiGatewayModelProviderService#allow_all_targets}.

---

##### `AmazonBedrock`<sup>Optional</sup> <a name="AmazonBedrock" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.amazonBedrock"></a>

```go
AmazonBedrock DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#amazon_bedrock DataDatabricksAiGatewayModelProviderService#amazon_bedrock}.

---

##### `Anthropic`<sup>Optional</sup> <a name="Anthropic" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.anthropic"></a>

```go
Anthropic DataDatabricksAiGatewayModelProviderServiceConfigAnthropic
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic">DataDatabricksAiGatewayModelProviderServiceConfigAnthropic</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#anthropic DataDatabricksAiGatewayModelProviderService#anthropic}.

---

##### `AzureOpenai`<sup>Optional</sup> <a name="AzureOpenai" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.azureOpenai"></a>

```go
AzureOpenai DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#azure_openai DataDatabricksAiGatewayModelProviderService#azure_openai}.

---

##### `Custom`<sup>Optional</sup> <a name="Custom" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.custom"></a>

```go
Custom DataDatabricksAiGatewayModelProviderServiceConfigCustom
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustom">DataDatabricksAiGatewayModelProviderServiceConfigCustom</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#custom DataDatabricksAiGatewayModelProviderService#custom}.

---

##### `ForwardHeaders`<sup>Optional</sup> <a name="ForwardHeaders" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.forwardHeaders"></a>

```go
ForwardHeaders interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#forward_headers DataDatabricksAiGatewayModelProviderService#forward_headers}.

---

##### `ForwardQueryParameters`<sup>Optional</sup> <a name="ForwardQueryParameters" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.forwardQueryParameters"></a>

```go
ForwardQueryParameters interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#forward_query_parameters DataDatabricksAiGatewayModelProviderService#forward_query_parameters}.

---

##### `ForwardUnmanagedPaths`<sup>Optional</sup> <a name="ForwardUnmanagedPaths" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.forwardUnmanagedPaths"></a>

```go
ForwardUnmanagedPaths interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#forward_unmanaged_paths DataDatabricksAiGatewayModelProviderService#forward_unmanaged_paths}.

---

##### `GeminiEnterprise`<sup>Optional</sup> <a name="GeminiEnterprise" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.geminiEnterprise"></a>

```go
GeminiEnterprise DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#gemini_enterprise DataDatabricksAiGatewayModelProviderService#gemini_enterprise}.

---

##### `InferenceTable`<sup>Optional</sup> <a name="InferenceTable" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.inferenceTable"></a>

```go
InferenceTable DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable">DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#inference_table DataDatabricksAiGatewayModelProviderService#inference_table}.

---

##### `MicrosoftFoundry`<sup>Optional</sup> <a name="MicrosoftFoundry" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.microsoftFoundry"></a>

```go
MicrosoftFoundry DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#microsoft_foundry DataDatabricksAiGatewayModelProviderService#microsoft_foundry}.

---

##### `Openai`<sup>Optional</sup> <a name="Openai" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.openai"></a>

```go
Openai DataDatabricksAiGatewayModelProviderServiceConfigOpenai
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenai">DataDatabricksAiGatewayModelProviderServiceConfigOpenai</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#openai DataDatabricksAiGatewayModelProviderService#openai}.

---

##### `ProviderType`<sup>Optional</sup> <a name="ProviderType" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.providerType"></a>

```go
ProviderType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#provider_type DataDatabricksAiGatewayModelProviderService#provider_type}.

---

##### `RateLimits`<sup>Optional</sup> <a name="RateLimits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.rateLimits"></a>

```go
RateLimits interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#rate_limits DataDatabricksAiGatewayModelProviderService#rate_limits}.

---

##### `Targets`<sup>Optional</sup> <a name="Targets" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.targets"></a>

```go
Targets interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#targets DataDatabricksAiGatewayModelProviderService#targets}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock <a name="DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock {
	Direct: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}. |

---

##### `Direct`<sup>Optional</sup> <a name="Direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock.property.direct"></a>

```go
Direct DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect <a name="DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect {
	AwsAccessKey: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey,
	Region: *string,
	ServiceCredential: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.awsAccessKey">AwsAccessKey</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#aws_access_key DataDatabricksAiGatewayModelProviderService#aws_access_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#region DataDatabricksAiGatewayModelProviderService#region}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.serviceCredential">ServiceCredential</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#service_credential DataDatabricksAiGatewayModelProviderService#service_credential}. |

---

##### `AwsAccessKey`<sup>Optional</sup> <a name="AwsAccessKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.awsAccessKey"></a>

```go
AwsAccessKey DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#aws_access_key DataDatabricksAiGatewayModelProviderService#aws_access_key}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#region DataDatabricksAiGatewayModelProviderService#region}.

---

##### `ServiceCredential`<sup>Optional</sup> <a name="ServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.serviceCredential"></a>

```go
ServiceCredential DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#service_credential DataDatabricksAiGatewayModelProviderService#service_credential}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey <a name="DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey {
	AccessKeyId: *string,
	SecretAccessKey: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey.property.accessKeyId">AccessKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#access_key_id DataDatabricksAiGatewayModelProviderService#access_key_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey.property.secretAccessKey">SecretAccessKey</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#secret_access_key DataDatabricksAiGatewayModelProviderService#secret_access_key}. |

---

##### `AccessKeyId`<sup>Optional</sup> <a name="AccessKeyId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey.property.accessKeyId"></a>

```go
AccessKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#access_key_id DataDatabricksAiGatewayModelProviderService#access_key_id}.

---

##### `SecretAccessKey`<sup>Optional</sup> <a name="SecretAccessKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey.property.secretAccessKey"></a>

```go
SecretAccessKey DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#secret_access_key DataDatabricksAiGatewayModelProviderService#secret_access_key}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey <a name="DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey {
	Plaintext: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey.property.plaintext">Plaintext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey.property.plaintext"></a>

```go
Plaintext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential <a name="DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAnthropic <a name="DataDatabricksAiGatewayModelProviderServiceConfigAnthropic" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic {
	Direct: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect,
	Relayed: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic.property.relayed">Relayed</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#relayed DataDatabricksAiGatewayModelProviderService#relayed}. |

---

##### `Direct`<sup>Optional</sup> <a name="Direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic.property.direct"></a>

```go
Direct DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}.

---

##### `Relayed`<sup>Optional</sup> <a name="Relayed" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic.property.relayed"></a>

```go
Relayed DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#relayed DataDatabricksAiGatewayModelProviderService#relayed}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect <a name="DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect {
	ApiKey: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect.property.apiKey"></a>

```go
ApiKey DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey <a name="DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey {
	Plaintext: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey.property.plaintext">Plaintext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey.property.plaintext"></a>

```go
Plaintext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed <a name="DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed {
	PlanType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed.property.planType">PlanType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#plan_type DataDatabricksAiGatewayModelProviderService#plan_type}. |

---

##### `PlanType`<sup>Optional</sup> <a name="PlanType" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed.property.planType"></a>

```go
PlanType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#plan_type DataDatabricksAiGatewayModelProviderService#plan_type}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai {
	Direct: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}. |

---

##### `Direct`<sup>Optional</sup> <a name="Direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai.property.direct"></a>

```go
Direct DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect {
	ApiKey: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey,
	BaseUrl: *string,
	EntraServicePrincipal: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal,
	ServiceCredential: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#base_url DataDatabricksAiGatewayModelProviderService#base_url}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.entraServicePrincipal">EntraServicePrincipal</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#entra_service_principal DataDatabricksAiGatewayModelProviderService#entra_service_principal}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.serviceCredential">ServiceCredential</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#service_credential DataDatabricksAiGatewayModelProviderService#service_credential}. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.apiKey"></a>

```go
ApiKey DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}.

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.baseUrl"></a>

```go
BaseUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#base_url DataDatabricksAiGatewayModelProviderService#base_url}.

---

##### `EntraServicePrincipal`<sup>Optional</sup> <a name="EntraServicePrincipal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.entraServicePrincipal"></a>

```go
EntraServicePrincipal DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#entra_service_principal DataDatabricksAiGatewayModelProviderService#entra_service_principal}.

---

##### `ServiceCredential`<sup>Optional</sup> <a name="ServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.serviceCredential"></a>

```go
ServiceCredential DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#service_credential DataDatabricksAiGatewayModelProviderService#service_credential}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey {
	Plaintext: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey.property.plaintext">Plaintext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey.property.plaintext"></a>

```go
Plaintext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal {
	ClientId: *string,
	ClientSecret: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret,
	TenantId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#client_id DataDatabricksAiGatewayModelProviderService#client_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.clientSecret">ClientSecret</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#client_secret DataDatabricksAiGatewayModelProviderService#client_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#tenant_id DataDatabricksAiGatewayModelProviderService#tenant_id}. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#client_id DataDatabricksAiGatewayModelProviderService#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.clientSecret"></a>

```go
ClientSecret DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#client_secret DataDatabricksAiGatewayModelProviderService#client_secret}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#tenant_id DataDatabricksAiGatewayModelProviderService#tenant_id}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret {
	Plaintext: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret.property.plaintext">Plaintext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret.property.plaintext"></a>

```go
Plaintext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigCustom <a name="DataDatabricksAiGatewayModelProviderServiceConfigCustom" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustom.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigCustom {
	Direct: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustom.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}. |

---

##### `Direct`<sup>Optional</sup> <a name="Direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustom.property.direct"></a>

```go
Direct DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect <a name="DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect {
	ApiKey: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey,
	BaseUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#base_url DataDatabricksAiGatewayModelProviderService#base_url}. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect.property.apiKey"></a>

```go
ApiKey DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}.

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect.property.baseUrl"></a>

```go
BaseUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#base_url DataDatabricksAiGatewayModelProviderService#base_url}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey <a name="DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey {
	Plaintext: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey.property.plaintext">Plaintext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey.property.plaintext"></a>

```go
Plaintext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise <a name="DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise {
	Direct: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}. |

---

##### `Direct`<sup>Optional</sup> <a name="Direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise.property.direct"></a>

```go
Direct DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect <a name="DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect {
	ApiKey: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey,
	ProjectId: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#project_id DataDatabricksAiGatewayModelProviderService#project_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#region DataDatabricksAiGatewayModelProviderService#region}. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.apiKey"></a>

```go
ApiKey DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#project_id DataDatabricksAiGatewayModelProviderService#project_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#region DataDatabricksAiGatewayModelProviderService#region}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey <a name="DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey {
	Plaintext: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey.property.plaintext">Plaintext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey.property.plaintext"></a>

```go
Plaintext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable <a name="DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable {
	Parent: *string,
	Disabled: interface{},
	TableNamePrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable.property.parent">Parent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#parent DataDatabricksAiGatewayModelProviderService#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable.property.disabled">Disabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#disabled DataDatabricksAiGatewayModelProviderService#disabled}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable.property.tableNamePrefix">TableNamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#table_name_prefix DataDatabricksAiGatewayModelProviderService#table_name_prefix}. |

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#parent DataDatabricksAiGatewayModelProviderService#parent}.

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#disabled DataDatabricksAiGatewayModelProviderService#disabled}.

---

##### `TableNamePrefix`<sup>Optional</sup> <a name="TableNamePrefix" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable.property.tableNamePrefix"></a>

```go
TableNamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#table_name_prefix DataDatabricksAiGatewayModelProviderService#table_name_prefix}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry {
	Direct: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}. |

---

##### `Direct`<sup>Optional</sup> <a name="Direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry.property.direct"></a>

```go
Direct DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect {
	ApiKey: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey,
	BaseUrl: *string,
	EntraServicePrincipal: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal,
	ServiceCredential: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#base_url DataDatabricksAiGatewayModelProviderService#base_url}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.entraServicePrincipal">EntraServicePrincipal</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#entra_service_principal DataDatabricksAiGatewayModelProviderService#entra_service_principal}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.serviceCredential">ServiceCredential</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#service_credential DataDatabricksAiGatewayModelProviderService#service_credential}. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.apiKey"></a>

```go
ApiKey DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}.

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.baseUrl"></a>

```go
BaseUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#base_url DataDatabricksAiGatewayModelProviderService#base_url}.

---

##### `EntraServicePrincipal`<sup>Optional</sup> <a name="EntraServicePrincipal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.entraServicePrincipal"></a>

```go
EntraServicePrincipal DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#entra_service_principal DataDatabricksAiGatewayModelProviderService#entra_service_principal}.

---

##### `ServiceCredential`<sup>Optional</sup> <a name="ServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.serviceCredential"></a>

```go
ServiceCredential DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#service_credential DataDatabricksAiGatewayModelProviderService#service_credential}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey {
	Plaintext: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey.property.plaintext">Plaintext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey.property.plaintext"></a>

```go
Plaintext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal {
	ClientId: *string,
	ClientSecret: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret,
	TenantId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#client_id DataDatabricksAiGatewayModelProviderService#client_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.clientSecret">ClientSecret</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#client_secret DataDatabricksAiGatewayModelProviderService#client_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#tenant_id DataDatabricksAiGatewayModelProviderService#tenant_id}. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#client_id DataDatabricksAiGatewayModelProviderService#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.clientSecret"></a>

```go
ClientSecret DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#client_secret DataDatabricksAiGatewayModelProviderService#client_secret}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#tenant_id DataDatabricksAiGatewayModelProviderService#tenant_id}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret {
	Plaintext: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret.property.plaintext">Plaintext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret.property.plaintext"></a>

```go
Plaintext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigOpenai <a name="DataDatabricksAiGatewayModelProviderServiceConfigOpenai" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenai"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenai.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigOpenai {
	Direct: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenai.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}. |

---

##### `Direct`<sup>Optional</sup> <a name="Direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenai.property.direct"></a>

```go
Direct DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect <a name="DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect {
	ApiKey: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey,
	BaseUrl: *string,
	Organization: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#base_url DataDatabricksAiGatewayModelProviderService#base_url}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect.property.organization">Organization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#organization DataDatabricksAiGatewayModelProviderService#organization}. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect.property.apiKey"></a>

```go
ApiKey DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}.

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect.property.baseUrl"></a>

```go
BaseUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#base_url DataDatabricksAiGatewayModelProviderService#base_url}.

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#organization DataDatabricksAiGatewayModelProviderService#organization}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey <a name="DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey {
	Plaintext: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey.property.plaintext">Plaintext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey.property.plaintext"></a>

```go
Plaintext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigRateLimits <a name="DataDatabricksAiGatewayModelProviderServiceConfigRateLimits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits {
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
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#key DataDatabricksAiGatewayModelProviderService#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.renewalPeriod">RenewalPeriod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#renewal_period DataDatabricksAiGatewayModelProviderService#renewal_period}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.principal">Principal</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#principal DataDatabricksAiGatewayModelProviderService#principal}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.requests">Requests</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#requests DataDatabricksAiGatewayModelProviderService#requests}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.requestTagKey">RequestTagKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#request_tag_key DataDatabricksAiGatewayModelProviderService#request_tag_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.requestTagValue">RequestTagValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#request_tag_value DataDatabricksAiGatewayModelProviderService#request_tag_value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.tokens">Tokens</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#tokens DataDatabricksAiGatewayModelProviderService#tokens}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#key DataDatabricksAiGatewayModelProviderService#key}.

---

##### `RenewalPeriod`<sup>Required</sup> <a name="RenewalPeriod" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.renewalPeriod"></a>

```go
RenewalPeriod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#renewal_period DataDatabricksAiGatewayModelProviderService#renewal_period}.

---

##### `Principal`<sup>Optional</sup> <a name="Principal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.principal"></a>

```go
Principal *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#principal DataDatabricksAiGatewayModelProviderService#principal}.

---

##### `Requests`<sup>Optional</sup> <a name="Requests" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.requests"></a>

```go
Requests *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#requests DataDatabricksAiGatewayModelProviderService#requests}.

---

##### `RequestTagKey`<sup>Optional</sup> <a name="RequestTagKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.requestTagKey"></a>

```go
RequestTagKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#request_tag_key DataDatabricksAiGatewayModelProviderService#request_tag_key}.

---

##### `RequestTagValue`<sup>Optional</sup> <a name="RequestTagValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.requestTagValue"></a>

```go
RequestTagValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#request_tag_value DataDatabricksAiGatewayModelProviderService#request_tag_value}.

---

##### `Tokens`<sup>Optional</sup> <a name="Tokens" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.tokens"></a>

```go
Tokens *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#tokens DataDatabricksAiGatewayModelProviderService#tokens}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigTargets <a name="DataDatabricksAiGatewayModelProviderServiceConfigTargets" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceConfigTargets {
	Model: *string,
	NativeApiTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets.property.model">Model</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#model DataDatabricksAiGatewayModelProviderService#model}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets.property.nativeApiTypes">NativeApiTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#native_api_types DataDatabricksAiGatewayModelProviderService#native_api_types}. |

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets.property.model"></a>

```go
Model *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#model DataDatabricksAiGatewayModelProviderService#model}.

---

##### `NativeApiTypes`<sup>Optional</sup> <a name="NativeApiTypes" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets.property.nativeApiTypes"></a>

```go
NativeApiTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#native_api_types DataDatabricksAiGatewayModelProviderService#native_api_types}.

---

### DataDatabricksAiGatewayModelProviderServiceProviderConfig <a name="DataDatabricksAiGatewayModelProviderServiceProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

&datadatabricksaigatewaymodelproviderservice.DataDatabricksAiGatewayModelProviderServiceProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#workspace_id DataDatabricksAiGatewayModelProviderService#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_provider_service#workspace_id DataDatabricksAiGatewayModelProviderService#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.putSecretAccessKey">PutSecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resetAccessKeyId">ResetAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resetSecretAccessKey">ResetSecretAccessKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecretAccessKey` <a name="PutSecretAccessKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.putSecretAccessKey"></a>

```go
func PutSecretAccessKey(value DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.putSecretAccessKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a>

---

##### `ResetAccessKeyId` <a name="ResetAccessKeyId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resetAccessKeyId"></a>

```go
func ResetAccessKeyId()
```

##### `ResetSecretAccessKey` <a name="ResetSecretAccessKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resetSecretAccessKey"></a>

```go
func ResetSecretAccessKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.secretAccessKey">SecretAccessKey</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.secretAccessKeyInput">SecretAccessKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.accessKeyId">AccessKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.secretAccessKey"></a>

```go
func SecretAccessKey() DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference</a>

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.accessKeyIdInput"></a>

```go
func AccessKeyIdInput() *string
```

- *Type:* *string

---

##### `SecretAccessKeyInput`<sup>Optional</sup> <a name="SecretAccessKeyInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.secretAccessKeyInput"></a>

```go
func SecretAccessKeyInput() interface{}
```

- *Type:* interface{}

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.accessKeyId"></a>

```go
func AccessKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.resetPlaintext"></a>

```go
func ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.plaintext">Plaintext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.plaintextInput"></a>

```go
func PlaintextInput() *string
```

- *Type:* *string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.plaintext"></a>

```go
func Plaintext() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putAwsAccessKey">PutAwsAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putServiceCredential">PutServiceCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetAwsAccessKey">ResetAwsAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetServiceCredential">ResetServiceCredential</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsAccessKey` <a name="PutAwsAccessKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putAwsAccessKey"></a>

```go
func PutAwsAccessKey(value DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putAwsAccessKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a>

---

##### `PutServiceCredential` <a name="PutServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putServiceCredential"></a>

```go
func PutServiceCredential(value DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putServiceCredential.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a>

---

##### `ResetAwsAccessKey` <a name="ResetAwsAccessKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetAwsAccessKey"></a>

```go
func ResetAwsAccessKey()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetServiceCredential` <a name="ResetServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetServiceCredential"></a>

```go
func ResetServiceCredential()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.awsAccessKey">AwsAccessKey</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.serviceCredential">ServiceCredential</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.awsAccessKeyInput">AwsAccessKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.serviceCredentialInput">ServiceCredentialInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsAccessKey`<sup>Required</sup> <a name="AwsAccessKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.awsAccessKey"></a>

```go
func AwsAccessKey() DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference</a>

---

##### `ServiceCredential`<sup>Required</sup> <a name="ServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.serviceCredential"></a>

```go
func ServiceCredential() DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference</a>

---

##### `AwsAccessKeyInput`<sup>Optional</sup> <a name="AwsAccessKeyInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.awsAccessKeyInput"></a>

```go
func AwsAccessKeyInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ServiceCredentialInput`<sup>Optional</sup> <a name="ServiceCredentialInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.serviceCredentialInput"></a>

```go
func ServiceCredentialInput() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.putDirect">PutDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resetDirect">ResetDirect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDirect` <a name="PutDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.putDirect"></a>

```go
func PutDirect(value DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect</a>

---

##### `ResetDirect` <a name="ResetDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resetDirect"></a>

```go
func ResetDirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.directInput">DirectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Direct`<sup>Required</sup> <a name="Direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.direct"></a>

```go
func Direct() DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference</a>

---

##### `DirectInput`<sup>Optional</sup> <a name="DirectInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.directInput"></a>

```go
func DirectInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resetPlaintext"></a>

```go
func ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.plaintext">Plaintext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.plaintextInput"></a>

```go
func PlaintextInput() *string
```

- *Type:* *string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.plaintext"></a>

```go
func Plaintext() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.putApiKey"></a>

```go
func PutApiKey(value DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.apiKey"></a>

```go
func ApiKey() DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.putDirect">PutDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.putRelayed">PutRelayed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.resetDirect">ResetDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.resetRelayed">ResetRelayed</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDirect` <a name="PutDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.putDirect"></a>

```go
func PutDirect(value DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect</a>

---

##### `PutRelayed` <a name="PutRelayed" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.putRelayed"></a>

```go
func PutRelayed(value DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.putRelayed.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed</a>

---

##### `ResetDirect` <a name="ResetDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.resetDirect"></a>

```go
func ResetDirect()
```

##### `ResetRelayed` <a name="ResetRelayed" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.resetRelayed"></a>

```go
func ResetRelayed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.relayed">Relayed</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.directInput">DirectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.relayedInput">RelayedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Direct`<sup>Required</sup> <a name="Direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.direct"></a>

```go
func Direct() DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference</a>

---

##### `Relayed`<sup>Required</sup> <a name="Relayed" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.relayed"></a>

```go
func Relayed() DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference</a>

---

##### `DirectInput`<sup>Optional</sup> <a name="DirectInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.directInput"></a>

```go
func DirectInput() interface{}
```

- *Type:* interface{}

---

##### `RelayedInput`<sup>Optional</sup> <a name="RelayedInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.relayedInput"></a>

```go
func RelayedInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resetPlanType">ResetPlanType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlanType` <a name="ResetPlanType" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resetPlanType"></a>

```go
func ResetPlanType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.planTypeInput">PlanTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.planType">PlanType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PlanTypeInput`<sup>Optional</sup> <a name="PlanTypeInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.planTypeInput"></a>

```go
func PlanTypeInput() *string
```

- *Type:* *string

---

##### `PlanType`<sup>Required</sup> <a name="PlanType" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.planType"></a>

```go
func PlanType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putAmazonBedrock">PutAmazonBedrock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putAnthropic">PutAnthropic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putAzureOpenai">PutAzureOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putCustom">PutCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putGeminiEnterprise">PutGeminiEnterprise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putInferenceTable">PutInferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putMicrosoftFoundry">PutMicrosoftFoundry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putOpenai">PutOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putRateLimits">PutRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putTargets">PutTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetAllowAllTargets">ResetAllowAllTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetAmazonBedrock">ResetAmazonBedrock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetAnthropic">ResetAnthropic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetAzureOpenai">ResetAzureOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetCustom">ResetCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetForwardHeaders">ResetForwardHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetForwardQueryParameters">ResetForwardQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetForwardUnmanagedPaths">ResetForwardUnmanagedPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetGeminiEnterprise">ResetGeminiEnterprise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetInferenceTable">ResetInferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetMicrosoftFoundry">ResetMicrosoftFoundry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetOpenai">ResetOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetProviderType">ResetProviderType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetRateLimits">ResetRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetTargets">ResetTargets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAmazonBedrock` <a name="PutAmazonBedrock" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putAmazonBedrock"></a>

```go
func PutAmazonBedrock(value DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putAmazonBedrock.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock</a>

---

##### `PutAnthropic` <a name="PutAnthropic" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putAnthropic"></a>

```go
func PutAnthropic(value DataDatabricksAiGatewayModelProviderServiceConfigAnthropic)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putAnthropic.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic">DataDatabricksAiGatewayModelProviderServiceConfigAnthropic</a>

---

##### `PutAzureOpenai` <a name="PutAzureOpenai" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putAzureOpenai"></a>

```go
func PutAzureOpenai(value DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putAzureOpenai.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai</a>

---

##### `PutCustom` <a name="PutCustom" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putCustom"></a>

```go
func PutCustom(value DataDatabricksAiGatewayModelProviderServiceConfigCustom)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putCustom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustom">DataDatabricksAiGatewayModelProviderServiceConfigCustom</a>

---

##### `PutGeminiEnterprise` <a name="PutGeminiEnterprise" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putGeminiEnterprise"></a>

```go
func PutGeminiEnterprise(value DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putGeminiEnterprise.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise</a>

---

##### `PutInferenceTable` <a name="PutInferenceTable" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putInferenceTable"></a>

```go
func PutInferenceTable(value DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putInferenceTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable">DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable</a>

---

##### `PutMicrosoftFoundry` <a name="PutMicrosoftFoundry" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putMicrosoftFoundry"></a>

```go
func PutMicrosoftFoundry(value DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putMicrosoftFoundry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry</a>

---

##### `PutOpenai` <a name="PutOpenai" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putOpenai"></a>

```go
func PutOpenai(value DataDatabricksAiGatewayModelProviderServiceConfigOpenai)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putOpenai.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenai">DataDatabricksAiGatewayModelProviderServiceConfigOpenai</a>

---

##### `PutRateLimits` <a name="PutRateLimits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putRateLimits"></a>

```go
func PutRateLimits(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putRateLimits.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTargets` <a name="PutTargets" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putTargets"></a>

```go
func PutTargets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putTargets.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowAllTargets` <a name="ResetAllowAllTargets" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetAllowAllTargets"></a>

```go
func ResetAllowAllTargets()
```

##### `ResetAmazonBedrock` <a name="ResetAmazonBedrock" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetAmazonBedrock"></a>

```go
func ResetAmazonBedrock()
```

##### `ResetAnthropic` <a name="ResetAnthropic" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetAnthropic"></a>

```go
func ResetAnthropic()
```

##### `ResetAzureOpenai` <a name="ResetAzureOpenai" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetAzureOpenai"></a>

```go
func ResetAzureOpenai()
```

##### `ResetCustom` <a name="ResetCustom" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetCustom"></a>

```go
func ResetCustom()
```

##### `ResetForwardHeaders` <a name="ResetForwardHeaders" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetForwardHeaders"></a>

```go
func ResetForwardHeaders()
```

##### `ResetForwardQueryParameters` <a name="ResetForwardQueryParameters" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetForwardQueryParameters"></a>

```go
func ResetForwardQueryParameters()
```

##### `ResetForwardUnmanagedPaths` <a name="ResetForwardUnmanagedPaths" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetForwardUnmanagedPaths"></a>

```go
func ResetForwardUnmanagedPaths()
```

##### `ResetGeminiEnterprise` <a name="ResetGeminiEnterprise" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetGeminiEnterprise"></a>

```go
func ResetGeminiEnterprise()
```

##### `ResetInferenceTable` <a name="ResetInferenceTable" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetInferenceTable"></a>

```go
func ResetInferenceTable()
```

##### `ResetMicrosoftFoundry` <a name="ResetMicrosoftFoundry" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetMicrosoftFoundry"></a>

```go
func ResetMicrosoftFoundry()
```

##### `ResetOpenai` <a name="ResetOpenai" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetOpenai"></a>

```go
func ResetOpenai()
```

##### `ResetProviderType` <a name="ResetProviderType" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetProviderType"></a>

```go
func ResetProviderType()
```

##### `ResetRateLimits` <a name="ResetRateLimits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetRateLimits"></a>

```go
func ResetRateLimits()
```

##### `ResetTargets` <a name="ResetTargets" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetTargets"></a>

```go
func ResetTargets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.amazonBedrock">AmazonBedrock</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.anthropic">Anthropic</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.azureOpenai">AzureOpenai</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.custom">Custom</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.geminiEnterprise">GeminiEnterprise</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.inferenceTable">InferenceTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.microsoftFoundry">MicrosoftFoundry</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.openai">Openai</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.rateLimits">RateLimits</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList">DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList">DataDatabricksAiGatewayModelProviderServiceConfigTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.allowAllTargetsInput">AllowAllTargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.amazonBedrockInput">AmazonBedrockInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.anthropicInput">AnthropicInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.azureOpenaiInput">AzureOpenaiInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.customInput">CustomInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardHeadersInput">ForwardHeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardQueryParametersInput">ForwardQueryParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardUnmanagedPathsInput">ForwardUnmanagedPathsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.geminiEnterpriseInput">GeminiEnterpriseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.inferenceTableInput">InferenceTableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.microsoftFoundryInput">MicrosoftFoundryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.openaiInput">OpenaiInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.providerTypeInput">ProviderTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.rateLimitsInput">RateLimitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.targetsInput">TargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.allowAllTargets">AllowAllTargets</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardHeaders">ForwardHeaders</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardQueryParameters">ForwardQueryParameters</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardUnmanagedPaths">ForwardUnmanagedPaths</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.providerType">ProviderType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA">DataDatabricksAiGatewayModelProviderServiceConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AmazonBedrock`<sup>Required</sup> <a name="AmazonBedrock" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.amazonBedrock"></a>

```go
func AmazonBedrock() DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference</a>

---

##### `Anthropic`<sup>Required</sup> <a name="Anthropic" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.anthropic"></a>

```go
func Anthropic() DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference</a>

---

##### `AzureOpenai`<sup>Required</sup> <a name="AzureOpenai" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.azureOpenai"></a>

```go
func AzureOpenai() DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference</a>

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.custom"></a>

```go
func Custom() DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference</a>

---

##### `GeminiEnterprise`<sup>Required</sup> <a name="GeminiEnterprise" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.geminiEnterprise"></a>

```go
func GeminiEnterprise() DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference</a>

---

##### `InferenceTable`<sup>Required</sup> <a name="InferenceTable" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.inferenceTable"></a>

```go
func InferenceTable() DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference</a>

---

##### `MicrosoftFoundry`<sup>Required</sup> <a name="MicrosoftFoundry" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.microsoftFoundry"></a>

```go
func MicrosoftFoundry() DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference</a>

---

##### `Openai`<sup>Required</sup> <a name="Openai" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.openai"></a>

```go
func Openai() DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference</a>

---

##### `RateLimits`<sup>Required</sup> <a name="RateLimits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.rateLimits"></a>

```go
func RateLimits() DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList">DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList</a>

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.targets"></a>

```go
func Targets() DataDatabricksAiGatewayModelProviderServiceConfigTargetsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList">DataDatabricksAiGatewayModelProviderServiceConfigTargetsList</a>

---

##### `AllowAllTargetsInput`<sup>Optional</sup> <a name="AllowAllTargetsInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.allowAllTargetsInput"></a>

```go
func AllowAllTargetsInput() interface{}
```

- *Type:* interface{}

---

##### `AmazonBedrockInput`<sup>Optional</sup> <a name="AmazonBedrockInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.amazonBedrockInput"></a>

```go
func AmazonBedrockInput() interface{}
```

- *Type:* interface{}

---

##### `AnthropicInput`<sup>Optional</sup> <a name="AnthropicInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.anthropicInput"></a>

```go
func AnthropicInput() interface{}
```

- *Type:* interface{}

---

##### `AzureOpenaiInput`<sup>Optional</sup> <a name="AzureOpenaiInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.azureOpenaiInput"></a>

```go
func AzureOpenaiInput() interface{}
```

- *Type:* interface{}

---

##### `CustomInput`<sup>Optional</sup> <a name="CustomInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.customInput"></a>

```go
func CustomInput() interface{}
```

- *Type:* interface{}

---

##### `ForwardHeadersInput`<sup>Optional</sup> <a name="ForwardHeadersInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardHeadersInput"></a>

```go
func ForwardHeadersInput() interface{}
```

- *Type:* interface{}

---

##### `ForwardQueryParametersInput`<sup>Optional</sup> <a name="ForwardQueryParametersInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardQueryParametersInput"></a>

```go
func ForwardQueryParametersInput() interface{}
```

- *Type:* interface{}

---

##### `ForwardUnmanagedPathsInput`<sup>Optional</sup> <a name="ForwardUnmanagedPathsInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardUnmanagedPathsInput"></a>

```go
func ForwardUnmanagedPathsInput() interface{}
```

- *Type:* interface{}

---

##### `GeminiEnterpriseInput`<sup>Optional</sup> <a name="GeminiEnterpriseInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.geminiEnterpriseInput"></a>

```go
func GeminiEnterpriseInput() interface{}
```

- *Type:* interface{}

---

##### `InferenceTableInput`<sup>Optional</sup> <a name="InferenceTableInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.inferenceTableInput"></a>

```go
func InferenceTableInput() interface{}
```

- *Type:* interface{}

---

##### `MicrosoftFoundryInput`<sup>Optional</sup> <a name="MicrosoftFoundryInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.microsoftFoundryInput"></a>

```go
func MicrosoftFoundryInput() interface{}
```

- *Type:* interface{}

---

##### `OpenaiInput`<sup>Optional</sup> <a name="OpenaiInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.openaiInput"></a>

```go
func OpenaiInput() interface{}
```

- *Type:* interface{}

---

##### `ProviderTypeInput`<sup>Optional</sup> <a name="ProviderTypeInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.providerTypeInput"></a>

```go
func ProviderTypeInput() *string
```

- *Type:* *string

---

##### `RateLimitsInput`<sup>Optional</sup> <a name="RateLimitsInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.rateLimitsInput"></a>

```go
func RateLimitsInput() interface{}
```

- *Type:* interface{}

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.targetsInput"></a>

```go
func TargetsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowAllTargets`<sup>Required</sup> <a name="AllowAllTargets" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.allowAllTargets"></a>

```go
func AllowAllTargets() interface{}
```

- *Type:* interface{}

---

##### `ForwardHeaders`<sup>Required</sup> <a name="ForwardHeaders" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardHeaders"></a>

```go
func ForwardHeaders() interface{}
```

- *Type:* interface{}

---

##### `ForwardQueryParameters`<sup>Required</sup> <a name="ForwardQueryParameters" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardQueryParameters"></a>

```go
func ForwardQueryParameters() interface{}
```

- *Type:* interface{}

---

##### `ForwardUnmanagedPaths`<sup>Required</sup> <a name="ForwardUnmanagedPaths" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardUnmanagedPaths"></a>

```go
func ForwardUnmanagedPaths() interface{}
```

- *Type:* interface{}

---

##### `ProviderType`<sup>Required</sup> <a name="ProviderType" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.providerType"></a>

```go
func ProviderType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAiGatewayModelProviderServiceConfigA
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA">DataDatabricksAiGatewayModelProviderServiceConfigA</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resetPlaintext"></a>

```go
func ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.plaintext">Plaintext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.plaintextInput"></a>

```go
func PlaintextInput() *string
```

- *Type:* *string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.plaintext"></a>

```go
func Plaintext() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.resetPlaintext"></a>

```go
func ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.plaintext">Plaintext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.plaintextInput"></a>

```go
func PlaintextInput() *string
```

- *Type:* *string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.plaintext"></a>

```go
func Plaintext() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.putClientSecret">PutClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientSecret` <a name="PutClientSecret" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.putClientSecret"></a>

```go
func PutClientSecret(value DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.putClientSecret.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a>

---

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetTenantId"></a>

```go
func ResetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientSecret">ClientSecret</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientSecret"></a>

```go
func ClientSecret() DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference</a>

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() interface{}
```

- *Type:* interface{}

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putEntraServicePrincipal">PutEntraServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putServiceCredential">PutServiceCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetEntraServicePrincipal">ResetEntraServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetServiceCredential">ResetServiceCredential</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putApiKey"></a>

```go
func PutApiKey(value DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a>

---

##### `PutEntraServicePrincipal` <a name="PutEntraServicePrincipal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putEntraServicePrincipal"></a>

```go
func PutEntraServicePrincipal(value DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putEntraServicePrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a>

---

##### `PutServiceCredential` <a name="PutServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putServiceCredential"></a>

```go
func PutServiceCredential(value DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putServiceCredential.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetBaseUrl"></a>

```go
func ResetBaseUrl()
```

##### `ResetEntraServicePrincipal` <a name="ResetEntraServicePrincipal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetEntraServicePrincipal"></a>

```go
func ResetEntraServicePrincipal()
```

##### `ResetServiceCredential` <a name="ResetServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetServiceCredential"></a>

```go
func ResetServiceCredential()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.entraServicePrincipal">EntraServicePrincipal</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.serviceCredential">ServiceCredential</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.baseUrlInput">BaseUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.entraServicePrincipalInput">EntraServicePrincipalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.serviceCredentialInput">ServiceCredentialInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.apiKey"></a>

```go
func ApiKey() DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference</a>

---

##### `EntraServicePrincipal`<sup>Required</sup> <a name="EntraServicePrincipal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.entraServicePrincipal"></a>

```go
func EntraServicePrincipal() DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference</a>

---

##### `ServiceCredential`<sup>Required</sup> <a name="ServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.serviceCredential"></a>

```go
func ServiceCredential() DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() interface{}
```

- *Type:* interface{}

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.baseUrlInput"></a>

```go
func BaseUrlInput() *string
```

- *Type:* *string

---

##### `EntraServicePrincipalInput`<sup>Optional</sup> <a name="EntraServicePrincipalInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.entraServicePrincipalInput"></a>

```go
func EntraServicePrincipalInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceCredentialInput`<sup>Optional</sup> <a name="ServiceCredentialInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.serviceCredentialInput"></a>

```go
func ServiceCredentialInput() interface{}
```

- *Type:* interface{}

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.baseUrl"></a>

```go
func BaseUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.putDirect">PutDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resetDirect">ResetDirect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDirect` <a name="PutDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.putDirect"></a>

```go
func PutDirect(value DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect</a>

---

##### `ResetDirect` <a name="ResetDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resetDirect"></a>

```go
func ResetDirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.directInput">DirectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Direct`<sup>Required</sup> <a name="Direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.direct"></a>

```go
func Direct() DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference</a>

---

##### `DirectInput`<sup>Optional</sup> <a name="DirectInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.directInput"></a>

```go
func DirectInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resetPlaintext"></a>

```go
func ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.plaintext">Plaintext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.plaintextInput"></a>

```go
func PlaintextInput() *string
```

- *Type:* *string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.plaintext"></a>

```go
func Plaintext() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.putApiKey"></a>

```go
func PutApiKey(value DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.resetBaseUrl"></a>

```go
func ResetBaseUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.baseUrlInput">BaseUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.apiKey"></a>

```go
func ApiKey() DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() interface{}
```

- *Type:* interface{}

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.baseUrlInput"></a>

```go
func BaseUrlInput() *string
```

- *Type:* *string

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.baseUrl"></a>

```go
func BaseUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.putDirect">PutDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.resetDirect">ResetDirect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDirect` <a name="PutDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.putDirect"></a>

```go
func PutDirect(value DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect</a>

---

##### `ResetDirect` <a name="ResetDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.resetDirect"></a>

```go
func ResetDirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.property.directInput">DirectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Direct`<sup>Required</sup> <a name="Direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.property.direct"></a>

```go
func Direct() DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference</a>

---

##### `DirectInput`<sup>Optional</sup> <a name="DirectInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.property.directInput"></a>

```go
func DirectInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resetPlaintext"></a>

```go
func ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.plaintext">Plaintext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.plaintextInput"></a>

```go
func PlaintextInput() *string
```

- *Type:* *string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.plaintext"></a>

```go
func Plaintext() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.putApiKey"></a>

```go
func PutApiKey(value DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetRegion"></a>

```go
func ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.apiKey"></a>

```go
func ApiKey() DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.putDirect">PutDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resetDirect">ResetDirect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDirect` <a name="PutDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.putDirect"></a>

```go
func PutDirect(value DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a>

---

##### `ResetDirect` <a name="ResetDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resetDirect"></a>

```go
func ResetDirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.directInput">DirectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Direct`<sup>Required</sup> <a name="Direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.direct"></a>

```go
func Direct() DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference</a>

---

##### `DirectInput`<sup>Optional</sup> <a name="DirectInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.directInput"></a>

```go
func DirectInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.resetTableNamePrefix">ResetTableNamePrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetTableNamePrefix` <a name="ResetTableNamePrefix" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.resetTableNamePrefix"></a>

```go
func ResetTableNamePrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.isDeleted">IsDeleted</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.table">Table</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.tableNamePrefixInput">TableNamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.tableNamePrefix">TableNamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsDeleted`<sup>Required</sup> <a name="IsDeleted" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.isDeleted"></a>

```go
func IsDeleted() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.table"></a>

```go
func Table() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `TableNamePrefixInput`<sup>Optional</sup> <a name="TableNamePrefixInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.tableNamePrefixInput"></a>

```go
func TableNamePrefixInput() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `TableNamePrefix`<sup>Required</sup> <a name="TableNamePrefix" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.tableNamePrefix"></a>

```go
func TableNamePrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resetPlaintext"></a>

```go
func ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.plaintext">Plaintext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.plaintextInput"></a>

```go
func PlaintextInput() *string
```

- *Type:* *string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.plaintext"></a>

```go
func Plaintext() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.resetPlaintext"></a>

```go
func ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.plaintext">Plaintext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.plaintextInput"></a>

```go
func PlaintextInput() *string
```

- *Type:* *string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.plaintext"></a>

```go
func Plaintext() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.putClientSecret">PutClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientSecret` <a name="PutClientSecret" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.putClientSecret"></a>

```go
func PutClientSecret(value DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.putClientSecret.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a>

---

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetTenantId"></a>

```go
func ResetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientSecret">ClientSecret</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientSecret"></a>

```go
func ClientSecret() DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference</a>

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() interface{}
```

- *Type:* interface{}

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putEntraServicePrincipal">PutEntraServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putServiceCredential">PutServiceCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetEntraServicePrincipal">ResetEntraServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetServiceCredential">ResetServiceCredential</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putApiKey"></a>

```go
func PutApiKey(value DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a>

---

##### `PutEntraServicePrincipal` <a name="PutEntraServicePrincipal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putEntraServicePrincipal"></a>

```go
func PutEntraServicePrincipal(value DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putEntraServicePrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a>

---

##### `PutServiceCredential` <a name="PutServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putServiceCredential"></a>

```go
func PutServiceCredential(value DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putServiceCredential.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetBaseUrl"></a>

```go
func ResetBaseUrl()
```

##### `ResetEntraServicePrincipal` <a name="ResetEntraServicePrincipal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetEntraServicePrincipal"></a>

```go
func ResetEntraServicePrincipal()
```

##### `ResetServiceCredential` <a name="ResetServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetServiceCredential"></a>

```go
func ResetServiceCredential()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.entraServicePrincipal">EntraServicePrincipal</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.serviceCredential">ServiceCredential</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.baseUrlInput">BaseUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.entraServicePrincipalInput">EntraServicePrincipalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.serviceCredentialInput">ServiceCredentialInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.apiKey"></a>

```go
func ApiKey() DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference</a>

---

##### `EntraServicePrincipal`<sup>Required</sup> <a name="EntraServicePrincipal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.entraServicePrincipal"></a>

```go
func EntraServicePrincipal() DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference</a>

---

##### `ServiceCredential`<sup>Required</sup> <a name="ServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.serviceCredential"></a>

```go
func ServiceCredential() DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() interface{}
```

- *Type:* interface{}

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.baseUrlInput"></a>

```go
func BaseUrlInput() *string
```

- *Type:* *string

---

##### `EntraServicePrincipalInput`<sup>Optional</sup> <a name="EntraServicePrincipalInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.entraServicePrincipalInput"></a>

```go
func EntraServicePrincipalInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceCredentialInput`<sup>Optional</sup> <a name="ServiceCredentialInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.serviceCredentialInput"></a>

```go
func ServiceCredentialInput() interface{}
```

- *Type:* interface{}

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.baseUrl"></a>

```go
func BaseUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.putDirect">PutDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resetDirect">ResetDirect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDirect` <a name="PutDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.putDirect"></a>

```go
func PutDirect(value DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a>

---

##### `ResetDirect` <a name="ResetDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resetDirect"></a>

```go
func ResetDirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.directInput">DirectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Direct`<sup>Required</sup> <a name="Direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.direct"></a>

```go
func Direct() DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference</a>

---

##### `DirectInput`<sup>Optional</sup> <a name="DirectInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.directInput"></a>

```go
func DirectInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resetPlaintext"></a>

```go
func ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.plaintext">Plaintext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.plaintextInput"></a>

```go
func PlaintextInput() *string
```

- *Type:* *string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.plaintext"></a>

```go
func Plaintext() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetOrganization">ResetOrganization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.putApiKey"></a>

```go
func PutApiKey(value DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetBaseUrl"></a>

```go
func ResetBaseUrl()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetOrganization"></a>

```go
func ResetOrganization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.baseUrlInput">BaseUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.apiKey"></a>

```go
func ApiKey() DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() interface{}
```

- *Type:* interface{}

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.baseUrlInput"></a>

```go
func BaseUrlInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.baseUrl"></a>

```go
func BaseUrl() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.putDirect">PutDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.resetDirect">ResetDirect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDirect` <a name="PutDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.putDirect"></a>

```go
func PutDirect(value DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect</a>

---

##### `ResetDirect` <a name="ResetDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.resetDirect"></a>

```go
func ResetDirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.property.directInput">DirectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Direct`<sup>Required</sup> <a name="Direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.property.direct"></a>

```go
func Direct() DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference</a>

---

##### `DirectInput`<sup>Optional</sup> <a name="DirectInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.property.directInput"></a>

```go
func DirectInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList <a name="DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.get"></a>

```go
func Get(index *f64) DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetPrincipal">ResetPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequests">ResetRequests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequestTagKey">ResetRequestTagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequestTagValue">ResetRequestTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetTokens">ResetTokens</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrincipal` <a name="ResetPrincipal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetPrincipal"></a>

```go
func ResetPrincipal()
```

##### `ResetRequests` <a name="ResetRequests" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequests"></a>

```go
func ResetRequests()
```

##### `ResetRequestTagKey` <a name="ResetRequestTagKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequestTagKey"></a>

```go
func ResetRequestTagKey()
```

##### `ResetRequestTagValue` <a name="ResetRequestTagValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequestTagValue"></a>

```go
func ResetRequestTagValue()
```

##### `ResetTokens` <a name="ResetTokens" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetTokens"></a>

```go
func ResetTokens()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.principalInput">PrincipalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.renewalPeriodInput">RenewalPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestsInput">RequestsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagKeyInput">RequestTagKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagValueInput">RequestTagValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.tokensInput">TokensInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.renewalPeriod">RenewalPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requests">Requests</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagKey">RequestTagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagValue">RequestTagValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.tokens">Tokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.principalInput"></a>

```go
func PrincipalInput() *string
```

- *Type:* *string

---

##### `RenewalPeriodInput`<sup>Optional</sup> <a name="RenewalPeriodInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.renewalPeriodInput"></a>

```go
func RenewalPeriodInput() *string
```

- *Type:* *string

---

##### `RequestsInput`<sup>Optional</sup> <a name="RequestsInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestsInput"></a>

```go
func RequestsInput() *f64
```

- *Type:* *f64

---

##### `RequestTagKeyInput`<sup>Optional</sup> <a name="RequestTagKeyInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagKeyInput"></a>

```go
func RequestTagKeyInput() *string
```

- *Type:* *string

---

##### `RequestTagValueInput`<sup>Optional</sup> <a name="RequestTagValueInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagValueInput"></a>

```go
func RequestTagValueInput() *string
```

- *Type:* *string

---

##### `TokensInput`<sup>Optional</sup> <a name="TokensInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.tokensInput"></a>

```go
func TokensInput() *f64
```

- *Type:* *f64

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `RenewalPeriod`<sup>Required</sup> <a name="RenewalPeriod" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.renewalPeriod"></a>

```go
func RenewalPeriod() *string
```

- *Type:* *string

---

##### `Requests`<sup>Required</sup> <a name="Requests" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requests"></a>

```go
func Requests() *f64
```

- *Type:* *f64

---

##### `RequestTagKey`<sup>Required</sup> <a name="RequestTagKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagKey"></a>

```go
func RequestTagKey() *string
```

- *Type:* *string

---

##### `RequestTagValue`<sup>Required</sup> <a name="RequestTagValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagValue"></a>

```go
func RequestTagValue() *string
```

- *Type:* *string

---

##### `Tokens`<sup>Required</sup> <a name="Tokens" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.tokens"></a>

```go
func Tokens() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigTargetsList <a name="DataDatabricksAiGatewayModelProviderServiceConfigTargetsList" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksAiGatewayModelProviderServiceConfigTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.get"></a>

```go
func Get(index *f64) DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.resetNativeApiTypes">ResetNativeApiTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNativeApiTypes` <a name="ResetNativeApiTypes" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.resetNativeApiTypes"></a>

```go
func ResetNativeApiTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.modelInput">ModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.nativeApiTypesInput">NativeApiTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.model">Model</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.nativeApiTypes">NativeApiTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.modelInput"></a>

```go
func ModelInput() *string
```

- *Type:* *string

---

##### `NativeApiTypesInput`<sup>Optional</sup> <a name="NativeApiTypesInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.nativeApiTypesInput"></a>

```go
func NativeApiTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.model"></a>

```go
func Model() *string
```

- *Type:* *string

---

##### `NativeApiTypes`<sup>Required</sup> <a name="NativeApiTypes" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.nativeApiTypes"></a>

```go
func NativeApiTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaigatewaymodelproviderservice"

datadatabricksaigatewaymodelproviderservice.NewDataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



