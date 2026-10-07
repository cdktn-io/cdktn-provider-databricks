# `dataDatabricksPrivateNetworkGateways` Submodule <a name="`dataDatabricksPrivateNetworkGateways` Submodule" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPrivateNetworkGateways <a name="DataDatabricksPrivateNetworkGateways" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways databricks_private_network_gateways}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateways"

datadatabricksprivatenetworkgateways.NewDataDatabricksPrivateNetworkGateways(scope Construct, id *string, config DataDatabricksPrivateNetworkGatewaysConfig) DataDatabricksPrivateNetworkGateways
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig">DataDatabricksPrivateNetworkGatewaysConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig">DataDatabricksPrivateNetworkGatewaysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPrivateNetworkGateways resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateways"

datadatabricksprivatenetworkgateways.DataDatabricksPrivateNetworkGateways_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateways"

datadatabricksprivatenetworkgateways.DataDatabricksPrivateNetworkGateways_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateways"

datadatabricksprivatenetworkgateways.DataDatabricksPrivateNetworkGateways_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateways"

datadatabricksprivatenetworkgateways.DataDatabricksPrivateNetworkGateways_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksPrivateNetworkGateways resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksPrivateNetworkGateways to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksPrivateNetworkGateways that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPrivateNetworkGateways to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.privateNetworkGateways">PrivateNetworkGateways</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `PrivateNetworkGateways`<sup>Required</sup> <a name="PrivateNetworkGateways" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.privateNetworkGateways"></a>

```go
func PrivateNetworkGateways() DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList</a>

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPrivateNetworkGatewaysConfig <a name="DataDatabricksPrivateNetworkGatewaysConfig" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateways"

&datadatabricksprivatenetworkgateways.DataDatabricksPrivateNetworkGatewaysConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Parent: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.parent">Parent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#parent DataDatabricksPrivateNetworkGateways#parent}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#parent DataDatabricksPrivateNetworkGateways#parent}.

---

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateways"

&datadatabricksprivatenetworkgateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#name DataDatabricksPrivateNetworkGateways#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#name DataDatabricksPrivateNetworkGateways#name}.

---

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateways"

&datadatabricksprivatenetworkgateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection {
	CrossAccountRole: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole,
	GatewaySubnets: interface{},
	SecurityGroupIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection.property.crossAccountRole">CrossAccountRole</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#cross_account_role DataDatabricksPrivateNetworkGateways#cross_account_role}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection.property.gatewaySubnets">GatewaySubnets</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#gateway_subnets DataDatabricksPrivateNetworkGateways#gateway_subnets}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#security_group_ids DataDatabricksPrivateNetworkGateways#security_group_ids}. |

---

##### `CrossAccountRole`<sup>Required</sup> <a name="CrossAccountRole" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection.property.crossAccountRole"></a>

```go
CrossAccountRole DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#cross_account_role DataDatabricksPrivateNetworkGateways#cross_account_role}.

---

##### `GatewaySubnets`<sup>Required</sup> <a name="GatewaySubnets" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection.property.gatewaySubnets"></a>

```go
GatewaySubnets interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#gateway_subnets DataDatabricksPrivateNetworkGateways#gateway_subnets}.

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#security_group_ids DataDatabricksPrivateNetworkGateways#security_group_ids}.

---

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateways"

&datadatabricksprivatenetworkgateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole {
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#role_arn DataDatabricksPrivateNetworkGateways#role_arn}. |

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#role_arn DataDatabricksPrivateNetworkGateways#role_arn}.

---

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateways"

&datadatabricksprivatenetworkgateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets {
	SubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#subnet_id DataDatabricksPrivateNetworkGateways#subnet_id}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#subnet_id DataDatabricksPrivateNetworkGateways#subnet_id}.

---

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateways"

&datadatabricksprivatenetworkgateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection {
	GatewaySubnet: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection.property.gatewaySubnet">GatewaySubnet</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#gateway_subnet DataDatabricksPrivateNetworkGateways#gateway_subnet}. |

---

##### `GatewaySubnet`<sup>Required</sup> <a name="GatewaySubnet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection.property.gatewaySubnet"></a>

```go
GatewaySubnet DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#gateway_subnet DataDatabricksPrivateNetworkGateways#gateway_subnet}.

---

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateways"

&datadatabricksprivatenetworkgateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet {
	ResourceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#resource_id DataDatabricksPrivateNetworkGateways#resource_id}. |

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#resource_id DataDatabricksPrivateNetworkGateways#resource_id}.

---

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateways"

&datadatabricksprivatenetworkgateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations {
	DestinationType: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations.property.destinationType">DestinationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#destination_type DataDatabricksPrivateNetworkGateways#destination_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#value DataDatabricksPrivateNetworkGateways#value}. |

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations.property.destinationType"></a>

```go
DestinationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#destination_type DataDatabricksPrivateNetworkGateways#destination_type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#value DataDatabricksPrivateNetworkGateways#value}.

---

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateways"

&datadatabricksprivatenetworkgateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers {
	ResolverType: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers.property.resolverType">ResolverType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#resolver_type DataDatabricksPrivateNetworkGateways#resolver_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#value DataDatabricksPrivateNetworkGateways#value}. |

---

##### `ResolverType`<sup>Required</sup> <a name="ResolverType" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers.property.resolverType"></a>

```go
ResolverType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#resolver_type DataDatabricksPrivateNetworkGateways#resolver_type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#value DataDatabricksPrivateNetworkGateways#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateways"

datadatabricksprivatenetworkgateways.NewDataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole</a>

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateways"

datadatabricksprivatenetworkgateways.NewDataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.get"></a>

```go
func Get(index *f64) DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateways"

datadatabricksprivatenetworkgateways.NewDataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets</a>

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateways"

datadatabricksprivatenetworkgateways.NewDataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.putCrossAccountRole">PutCrossAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.putGatewaySubnets">PutGatewaySubnets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCrossAccountRole` <a name="PutCrossAccountRole" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.putCrossAccountRole"></a>

```go
func PutCrossAccountRole(value DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.putCrossAccountRole.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole</a>

---

##### `PutGatewaySubnets` <a name="PutGatewaySubnets" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.putGatewaySubnets"></a>

```go
func PutGatewaySubnets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.putGatewaySubnets.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.crossAccountRole">CrossAccountRole</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.gatewaySubnets">GatewaySubnets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.crossAccountRoleInput">CrossAccountRoleInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.gatewaySubnetsInput">GatewaySubnetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CrossAccountRole`<sup>Required</sup> <a name="CrossAccountRole" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.crossAccountRole"></a>

```go
func CrossAccountRole() DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference</a>

---

##### `GatewaySubnets`<sup>Required</sup> <a name="GatewaySubnets" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.gatewaySubnets"></a>

```go
func GatewaySubnets() DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList</a>

---

##### `CrossAccountRoleInput`<sup>Optional</sup> <a name="CrossAccountRoleInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.crossAccountRoleInput"></a>

```go
func CrossAccountRoleInput() DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole</a>

---

##### `GatewaySubnetsInput`<sup>Optional</sup> <a name="GatewaySubnetsInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.gatewaySubnetsInput"></a>

```go
func GatewaySubnetsInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection</a>

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateways"

datadatabricksprivatenetworkgateways.NewDataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet</a>

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateways"

datadatabricksprivatenetworkgateways.NewDataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.putGatewaySubnet">PutGatewaySubnet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGatewaySubnet` <a name="PutGatewaySubnet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.putGatewaySubnet"></a>

```go
func PutGatewaySubnet(value DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.putGatewaySubnet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.gatewaySubnet">GatewaySubnet</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.gatewaySubnetInput">GatewaySubnetInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GatewaySubnet`<sup>Required</sup> <a name="GatewaySubnet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.gatewaySubnet"></a>

```go
func GatewaySubnet() DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference</a>

---

##### `GatewaySubnetInput`<sup>Optional</sup> <a name="GatewaySubnetInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.gatewaySubnetInput"></a>

```go
func GatewaySubnetInput() DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection</a>

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateways"

datadatabricksprivatenetworkgateways.NewDataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.get"></a>

```go
func Get(index *f64) DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateways"

datadatabricksprivatenetworkgateways.NewDataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.destinationTypeInput">DestinationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.destinationType">DestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationTypeInput`<sup>Optional</sup> <a name="DestinationTypeInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.destinationTypeInput"></a>

```go
func DestinationTypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.destinationType"></a>

```go
func DestinationType() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations</a>

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateways"

datadatabricksprivatenetworkgateways.NewDataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.get"></a>

```go
func Get(index *f64) DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateways"

datadatabricksprivatenetworkgateways.NewDataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.awsCloudConnection">AwsCloudConnection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.azureCloudConnection">AzureCloudConnection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.bandwidthTierGigabitsPerSecond">BandwidthTierGigabitsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.privateDnsResolvers">PrivateDnsResolvers</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.trafficMode">TrafficMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsCloudConnection`<sup>Required</sup> <a name="AwsCloudConnection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.awsCloudConnection"></a>

```go
func AwsCloudConnection() DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference</a>

---

##### `AzureCloudConnection`<sup>Required</sup> <a name="AzureCloudConnection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.azureCloudConnection"></a>

```go
func AzureCloudConnection() DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference</a>

---

##### `BandwidthTierGigabitsPerSecond`<sup>Required</sup> <a name="BandwidthTierGigabitsPerSecond" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.bandwidthTierGigabitsPerSecond"></a>

```go
func BandwidthTierGigabitsPerSecond() *f64
```

- *Type:* *f64

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.destinations"></a>

```go
func Destinations() DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `PrivateDnsResolvers`<sup>Required</sup> <a name="PrivateDnsResolvers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.privateDnsResolvers"></a>

```go
func PrivateDnsResolvers() DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TrafficMode`<sup>Required</sup> <a name="TrafficMode" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.trafficMode"></a>

```go
func TrafficMode() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways</a>

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateways"

datadatabricksprivatenetworkgateways.NewDataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.get"></a>

```go
func Get(index *f64) DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksprivatenetworkgateways"

datadatabricksprivatenetworkgateways.NewDataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.resolverTypeInput">ResolverTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.resolverType">ResolverType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResolverTypeInput`<sup>Optional</sup> <a name="ResolverTypeInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.resolverTypeInput"></a>

```go
func ResolverTypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ResolverType`<sup>Required</sup> <a name="ResolverType" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.resolverType"></a>

```go
func ResolverType() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers</a>

---



