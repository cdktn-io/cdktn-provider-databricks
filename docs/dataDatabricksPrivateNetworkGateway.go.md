# `dataDatabricksPrivateNetworkGateway` Submodule <a name="`dataDatabricksPrivateNetworkGateway` Submodule" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPrivateNetworkGateway <a name="DataDatabricksPrivateNetworkGateway" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway databricks_private_network_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateway"

datadatabricksprivatenetworkgateway.NewDataDatabricksPrivateNetworkGateway(scope Construct, id *string, config DataDatabricksPrivateNetworkGatewayConfig) DataDatabricksPrivateNetworkGateway
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig">DataDatabricksPrivateNetworkGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig">DataDatabricksPrivateNetworkGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPrivateNetworkGateway resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateway"

datadatabricksprivatenetworkgateway.DataDatabricksPrivateNetworkGateway_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateway"

datadatabricksprivatenetworkgateway.DataDatabricksPrivateNetworkGateway_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateway"

datadatabricksprivatenetworkgateway.DataDatabricksPrivateNetworkGateway_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateway"

datadatabricksprivatenetworkgateway.DataDatabricksPrivateNetworkGateway_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksPrivateNetworkGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksPrivateNetworkGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksPrivateNetworkGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPrivateNetworkGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.awsCloudConnection">AwsCloudConnection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.azureCloudConnection">AzureCloudConnection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference">DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.bandwidthTierGigabitsPerSecond">BandwidthTierGigabitsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList">DataDatabricksPrivateNetworkGatewayDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.privateDnsResolvers">PrivateDnsResolvers</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList">DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.trafficMode">TrafficMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AwsCloudConnection`<sup>Required</sup> <a name="AwsCloudConnection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.awsCloudConnection"></a>

```go
func AwsCloudConnection() DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference</a>

---

##### `AzureCloudConnection`<sup>Required</sup> <a name="AzureCloudConnection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.azureCloudConnection"></a>

```go
func AzureCloudConnection() DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference">DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference</a>

---

##### `BandwidthTierGigabitsPerSecond`<sup>Required</sup> <a name="BandwidthTierGigabitsPerSecond" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.bandwidthTierGigabitsPerSecond"></a>

```go
func BandwidthTierGigabitsPerSecond() *f64
```

- *Type:* *f64

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.destinations"></a>

```go
func Destinations() DataDatabricksPrivateNetworkGatewayDestinationsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList">DataDatabricksPrivateNetworkGatewayDestinationsList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `PrivateDnsResolvers`<sup>Required</sup> <a name="PrivateDnsResolvers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.privateDnsResolvers"></a>

```go
func PrivateDnsResolvers() DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList">DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TrafficMode`<sup>Required</sup> <a name="TrafficMode" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.trafficMode"></a>

```go
func TrafficMode() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPrivateNetworkGatewayAwsCloudConnection <a name="DataDatabricksPrivateNetworkGatewayAwsCloudConnection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateway"

&datadatabricksprivatenetworkgateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection {
	CrossAccountRole: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole,
	GatewaySubnets: interface{},
	SecurityGroupIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection.property.crossAccountRole">CrossAccountRole</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#cross_account_role DataDatabricksPrivateNetworkGateway#cross_account_role}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection.property.gatewaySubnets">GatewaySubnets</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#gateway_subnets DataDatabricksPrivateNetworkGateway#gateway_subnets}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#security_group_ids DataDatabricksPrivateNetworkGateway#security_group_ids}. |

---

##### `CrossAccountRole`<sup>Required</sup> <a name="CrossAccountRole" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection.property.crossAccountRole"></a>

```go
CrossAccountRole DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#cross_account_role DataDatabricksPrivateNetworkGateway#cross_account_role}.

---

##### `GatewaySubnets`<sup>Required</sup> <a name="GatewaySubnets" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection.property.gatewaySubnets"></a>

```go
GatewaySubnets interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#gateway_subnets DataDatabricksPrivateNetworkGateway#gateway_subnets}.

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#security_group_ids DataDatabricksPrivateNetworkGateway#security_group_ids}.

---

### DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole <a name="DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateway"

&datadatabricksprivatenetworkgateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole {
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#role_arn DataDatabricksPrivateNetworkGateway#role_arn}. |

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#role_arn DataDatabricksPrivateNetworkGateway#role_arn}.

---

### DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets <a name="DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateway"

&datadatabricksprivatenetworkgateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets {
	SubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#subnet_id DataDatabricksPrivateNetworkGateway#subnet_id}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#subnet_id DataDatabricksPrivateNetworkGateway#subnet_id}.

---

### DataDatabricksPrivateNetworkGatewayAzureCloudConnection <a name="DataDatabricksPrivateNetworkGatewayAzureCloudConnection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateway"

&datadatabricksprivatenetworkgateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnection {
	GatewaySubnet: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnection.property.gatewaySubnet">GatewaySubnet</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#gateway_subnet DataDatabricksPrivateNetworkGateway#gateway_subnet}. |

---

##### `GatewaySubnet`<sup>Required</sup> <a name="GatewaySubnet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnection.property.gatewaySubnet"></a>

```go
GatewaySubnet DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#gateway_subnet DataDatabricksPrivateNetworkGateway#gateway_subnet}.

---

### DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet <a name="DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateway"

&datadatabricksprivatenetworkgateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet {
	ResourceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#resource_id DataDatabricksPrivateNetworkGateway#resource_id}. |

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#resource_id DataDatabricksPrivateNetworkGateway#resource_id}.

---

### DataDatabricksPrivateNetworkGatewayConfig <a name="DataDatabricksPrivateNetworkGatewayConfig" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateway"

&datadatabricksprivatenetworkgateway.DataDatabricksPrivateNetworkGatewayConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#name DataDatabricksPrivateNetworkGateway#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#name DataDatabricksPrivateNetworkGateway#name}.

---

### DataDatabricksPrivateNetworkGatewayDestinations <a name="DataDatabricksPrivateNetworkGatewayDestinations" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateway"

&datadatabricksprivatenetworkgateway.DataDatabricksPrivateNetworkGatewayDestinations {
	DestinationType: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinations.property.destinationType">DestinationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#destination_type DataDatabricksPrivateNetworkGateway#destination_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinations.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#value DataDatabricksPrivateNetworkGateway#value}. |

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinations.property.destinationType"></a>

```go
DestinationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#destination_type DataDatabricksPrivateNetworkGateway#destination_type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinations.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#value DataDatabricksPrivateNetworkGateway#value}.

---

### DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers <a name="DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateway"

&datadatabricksprivatenetworkgateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers {
	ResolverType: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers.property.resolverType">ResolverType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#resolver_type DataDatabricksPrivateNetworkGateway#resolver_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#value DataDatabricksPrivateNetworkGateway#value}. |

---

##### `ResolverType`<sup>Required</sup> <a name="ResolverType" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers.property.resolverType"></a>

```go
ResolverType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#resolver_type DataDatabricksPrivateNetworkGateway#resolver_type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#value DataDatabricksPrivateNetworkGateway#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference <a name="DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateway"

datadatabricksprivatenetworkgateway.NewDataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a>

---


### DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList <a name="DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateway"

datadatabricksprivatenetworkgateway.NewDataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.get"></a>

```go
func Get(index *f64) DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference <a name="DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateway"

datadatabricksprivatenetworkgateway.NewDataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>

---


### DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference <a name="DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateway"

datadatabricksprivatenetworkgateway.NewDataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.putCrossAccountRole">PutCrossAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.putGatewaySubnets">PutGatewaySubnets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCrossAccountRole` <a name="PutCrossAccountRole" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.putCrossAccountRole"></a>

```go
func PutCrossAccountRole(value DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.putCrossAccountRole.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a>

---

##### `PutGatewaySubnets` <a name="PutGatewaySubnets" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.putGatewaySubnets"></a>

```go
func PutGatewaySubnets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.putGatewaySubnets.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.crossAccountRole">CrossAccountRole</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.gatewaySubnets">GatewaySubnets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.crossAccountRoleInput">CrossAccountRoleInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.gatewaySubnetsInput">GatewaySubnetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection">DataDatabricksPrivateNetworkGatewayAwsCloudConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CrossAccountRole`<sup>Required</sup> <a name="CrossAccountRole" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.crossAccountRole"></a>

```go
func CrossAccountRole() DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference</a>

---

##### `GatewaySubnets`<sup>Required</sup> <a name="GatewaySubnets" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.gatewaySubnets"></a>

```go
func GatewaySubnets() DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList</a>

---

##### `CrossAccountRoleInput`<sup>Optional</sup> <a name="CrossAccountRoleInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.crossAccountRoleInput"></a>

```go
func CrossAccountRoleInput() DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a>

---

##### `GatewaySubnetsInput`<sup>Optional</sup> <a name="GatewaySubnetsInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.gatewaySubnetsInput"></a>

```go
func GatewaySubnetsInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPrivateNetworkGatewayAwsCloudConnection
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection">DataDatabricksPrivateNetworkGatewayAwsCloudConnection</a>

---


### DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference <a name="DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateway"

datadatabricksprivatenetworkgateway.NewDataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a>

---


### DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference <a name="DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateway"

datadatabricksprivatenetworkgateway.NewDataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.putGatewaySubnet">PutGatewaySubnet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGatewaySubnet` <a name="PutGatewaySubnet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.putGatewaySubnet"></a>

```go
func PutGatewaySubnet(value DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.putGatewaySubnet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.property.gatewaySubnet">GatewaySubnet</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference">DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.property.gatewaySubnetInput">GatewaySubnetInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnection">DataDatabricksPrivateNetworkGatewayAzureCloudConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GatewaySubnet`<sup>Required</sup> <a name="GatewaySubnet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.property.gatewaySubnet"></a>

```go
func GatewaySubnet() DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference">DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference</a>

---

##### `GatewaySubnetInput`<sup>Optional</sup> <a name="GatewaySubnetInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.property.gatewaySubnetInput"></a>

```go
func GatewaySubnetInput() DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPrivateNetworkGatewayAzureCloudConnection
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnection">DataDatabricksPrivateNetworkGatewayAzureCloudConnection</a>

---


### DataDatabricksPrivateNetworkGatewayDestinationsList <a name="DataDatabricksPrivateNetworkGatewayDestinationsList" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateway"

datadatabricksprivatenetworkgateway.NewDataDatabricksPrivateNetworkGatewayDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksPrivateNetworkGatewayDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.get"></a>

```go
func Get(index *f64) DataDatabricksPrivateNetworkGatewayDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPrivateNetworkGatewayDestinationsOutputReference <a name="DataDatabricksPrivateNetworkGatewayDestinationsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateway"

datadatabricksprivatenetworkgateway.NewDataDatabricksPrivateNetworkGatewayDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksPrivateNetworkGatewayDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.destinationTypeInput">DestinationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.destinationType">DestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinations">DataDatabricksPrivateNetworkGatewayDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationTypeInput`<sup>Optional</sup> <a name="DestinationTypeInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.destinationTypeInput"></a>

```go
func DestinationTypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.destinationType"></a>

```go
func DestinationType() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPrivateNetworkGatewayDestinations
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinations">DataDatabricksPrivateNetworkGatewayDestinations</a>

---


### DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList <a name="DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateway"

datadatabricksprivatenetworkgateway.NewDataDatabricksPrivateNetworkGatewayPrivateDnsResolversList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.get"></a>

```go
func Get(index *f64) DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference <a name="DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateway"

datadatabricksprivatenetworkgateway.NewDataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.resolverTypeInput">ResolverTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.resolverType">ResolverType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers">DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResolverTypeInput`<sup>Optional</sup> <a name="ResolverTypeInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.resolverTypeInput"></a>

```go
func ResolverTypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ResolverType`<sup>Required</sup> <a name="ResolverType" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.resolverType"></a>

```go
func ResolverType() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers">DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers</a>

---



