# `dataDatabricksQualityMonitorV2` Submodule <a name="`dataDatabricksQualityMonitorV2` Submodule" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksQualityMonitorV2 <a name="DataDatabricksQualityMonitorV2" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/quality_monitor_v2 databricks_quality_monitor_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksqualitymonitorv2"

datadatabricksqualitymonitorv2.NewDataDatabricksQualityMonitorV2(scope Construct, id *string, config DataDatabricksQualityMonitorV2Config) DataDatabricksQualityMonitorV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config">DataDatabricksQualityMonitorV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config">DataDatabricksQualityMonitorV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksQualityMonitorV2ProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfig">DataDatabricksQualityMonitorV2ProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksQualityMonitorV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksqualitymonitorv2"

datadatabricksqualitymonitorv2.DataDatabricksQualityMonitorV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksqualitymonitorv2"

datadatabricksqualitymonitorv2.DataDatabricksQualityMonitorV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksqualitymonitorv2"

datadatabricksqualitymonitorv2.DataDatabricksQualityMonitorV2_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksqualitymonitorv2"

datadatabricksqualitymonitorv2.DataDatabricksQualityMonitorV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksQualityMonitorV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksQualityMonitorV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksQualityMonitorV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/quality_monitor_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksQualityMonitorV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.anomalyDetectionConfig">AnomalyDetectionConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference">DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference">DataDatabricksQualityMonitorV2ProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.validityCheckConfigurations">ValidityCheckConfigurations</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectIdInput">ObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectTypeInput">ObjectTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectType">ObjectType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AnomalyDetectionConfig`<sup>Required</sup> <a name="AnomalyDetectionConfig" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.anomalyDetectionConfig"></a>

```go
func AnomalyDetectionConfig() DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference">DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksQualityMonitorV2ProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference">DataDatabricksQualityMonitorV2ProviderConfigOutputReference</a>

---

##### `ValidityCheckConfigurations`<sup>Required</sup> <a name="ValidityCheckConfigurations" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.validityCheckConfigurations"></a>

```go
func ValidityCheckConfigurations() DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList</a>

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectIdInput"></a>

```go
func ObjectIdInput() *string
```

- *Type:* *string

---

##### `ObjectTypeInput`<sup>Optional</sup> <a name="ObjectTypeInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectTypeInput"></a>

```go
func ObjectTypeInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectType"></a>

```go
func ObjectType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksQualityMonitorV2AnomalyDetectionConfig <a name="DataDatabricksQualityMonitorV2AnomalyDetectionConfig" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksqualitymonitorv2"

&datadatabricksqualitymonitorv2.DataDatabricksQualityMonitorV2AnomalyDetectionConfig {
	ExcludedTableFullNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfig.property.excludedTableFullNames">ExcludedTableFullNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/quality_monitor_v2#excluded_table_full_names DataDatabricksQualityMonitorV2#excluded_table_full_names}. |

---

##### `ExcludedTableFullNames`<sup>Optional</sup> <a name="ExcludedTableFullNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfig.property.excludedTableFullNames"></a>

```go
ExcludedTableFullNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/quality_monitor_v2#excluded_table_full_names DataDatabricksQualityMonitorV2#excluded_table_full_names}.

---

### DataDatabricksQualityMonitorV2Config <a name="DataDatabricksQualityMonitorV2Config" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksqualitymonitorv2"

&datadatabricksqualitymonitorv2.DataDatabricksQualityMonitorV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ObjectId: *string,
	ObjectType: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.objectId">ObjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/quality_monitor_v2#object_id DataDatabricksQualityMonitorV2#object_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.objectType">ObjectType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/quality_monitor_v2#object_type DataDatabricksQualityMonitorV2#object_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfig">DataDatabricksQualityMonitorV2ProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/quality_monitor_v2#provider_config DataDatabricksQualityMonitorV2#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.objectId"></a>

```go
ObjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/quality_monitor_v2#object_id DataDatabricksQualityMonitorV2#object_id}.

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.objectType"></a>

```go
ObjectType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/quality_monitor_v2#object_type DataDatabricksQualityMonitorV2#object_type}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksQualityMonitorV2ProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfig">DataDatabricksQualityMonitorV2ProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/quality_monitor_v2#provider_config DataDatabricksQualityMonitorV2#provider_config}.

---

### DataDatabricksQualityMonitorV2ProviderConfig <a name="DataDatabricksQualityMonitorV2ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksqualitymonitorv2"

&datadatabricksqualitymonitorv2.DataDatabricksQualityMonitorV2ProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/quality_monitor_v2#workspace_id DataDatabricksQualityMonitorV2#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/quality_monitor_v2#workspace_id DataDatabricksQualityMonitorV2#workspace_id}.

---

### DataDatabricksQualityMonitorV2ValidityCheckConfigurations <a name="DataDatabricksQualityMonitorV2ValidityCheckConfigurations" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksqualitymonitorv2"

&datadatabricksqualitymonitorv2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations {
	Name: *string,
	PercentNullValidityCheck: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck,
	RangeValidityCheck: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck,
	UniquenessValidityCheck: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/quality_monitor_v2#name DataDatabricksQualityMonitorV2#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations.property.percentNullValidityCheck">PercentNullValidityCheck</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/quality_monitor_v2#percent_null_validity_check DataDatabricksQualityMonitorV2#percent_null_validity_check}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations.property.rangeValidityCheck">RangeValidityCheck</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/quality_monitor_v2#range_validity_check DataDatabricksQualityMonitorV2#range_validity_check}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations.property.uniquenessValidityCheck">UniquenessValidityCheck</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/quality_monitor_v2#uniqueness_validity_check DataDatabricksQualityMonitorV2#uniqueness_validity_check}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/quality_monitor_v2#name DataDatabricksQualityMonitorV2#name}.

---

##### `PercentNullValidityCheck`<sup>Optional</sup> <a name="PercentNullValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations.property.percentNullValidityCheck"></a>

```go
PercentNullValidityCheck DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/quality_monitor_v2#percent_null_validity_check DataDatabricksQualityMonitorV2#percent_null_validity_check}.

---

##### `RangeValidityCheck`<sup>Optional</sup> <a name="RangeValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations.property.rangeValidityCheck"></a>

```go
RangeValidityCheck DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/quality_monitor_v2#range_validity_check DataDatabricksQualityMonitorV2#range_validity_check}.

---

##### `UniquenessValidityCheck`<sup>Optional</sup> <a name="UniquenessValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations.property.uniquenessValidityCheck"></a>

```go
UniquenessValidityCheck DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/quality_monitor_v2#uniqueness_validity_check DataDatabricksQualityMonitorV2#uniqueness_validity_check}.

---

### DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck <a name="DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksqualitymonitorv2"

&datadatabricksqualitymonitorv2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck {
	ColumnNames: *[]*string,
	UpperBound: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck.property.columnNames">ColumnNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/quality_monitor_v2#column_names DataDatabricksQualityMonitorV2#column_names}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck.property.upperBound">UpperBound</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/quality_monitor_v2#upper_bound DataDatabricksQualityMonitorV2#upper_bound}. |

---

##### `ColumnNames`<sup>Optional</sup> <a name="ColumnNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck.property.columnNames"></a>

```go
ColumnNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/quality_monitor_v2#column_names DataDatabricksQualityMonitorV2#column_names}.

---

##### `UpperBound`<sup>Optional</sup> <a name="UpperBound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck.property.upperBound"></a>

```go
UpperBound *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/quality_monitor_v2#upper_bound DataDatabricksQualityMonitorV2#upper_bound}.

---

### DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck <a name="DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksqualitymonitorv2"

&datadatabricksqualitymonitorv2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck {
	ColumnNames: *[]*string,
	LowerBound: *f64,
	UpperBound: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.property.columnNames">ColumnNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/quality_monitor_v2#column_names DataDatabricksQualityMonitorV2#column_names}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.property.lowerBound">LowerBound</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/quality_monitor_v2#lower_bound DataDatabricksQualityMonitorV2#lower_bound}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.property.upperBound">UpperBound</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/quality_monitor_v2#upper_bound DataDatabricksQualityMonitorV2#upper_bound}. |

---

##### `ColumnNames`<sup>Optional</sup> <a name="ColumnNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.property.columnNames"></a>

```go
ColumnNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/quality_monitor_v2#column_names DataDatabricksQualityMonitorV2#column_names}.

---

##### `LowerBound`<sup>Optional</sup> <a name="LowerBound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.property.lowerBound"></a>

```go
LowerBound *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/quality_monitor_v2#lower_bound DataDatabricksQualityMonitorV2#lower_bound}.

---

##### `UpperBound`<sup>Optional</sup> <a name="UpperBound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.property.upperBound"></a>

```go
UpperBound *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/quality_monitor_v2#upper_bound DataDatabricksQualityMonitorV2#upper_bound}.

---

### DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck <a name="DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksqualitymonitorv2"

&datadatabricksqualitymonitorv2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck {
	ColumnNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck.property.columnNames">ColumnNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/quality_monitor_v2#column_names DataDatabricksQualityMonitorV2#column_names}. |

---

##### `ColumnNames`<sup>Optional</sup> <a name="ColumnNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck.property.columnNames"></a>

```go
ColumnNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/quality_monitor_v2#column_names DataDatabricksQualityMonitorV2#column_names}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference <a name="DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksqualitymonitorv2"

datadatabricksqualitymonitorv2.NewDataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.resetExcludedTableFullNames">ResetExcludedTableFullNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedTableFullNames` <a name="ResetExcludedTableFullNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.resetExcludedTableFullNames"></a>

```go
func ResetExcludedTableFullNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.lastRunId">LastRunId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.latestRunStatus">LatestRunStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.excludedTableFullNamesInput">ExcludedTableFullNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.excludedTableFullNames">ExcludedTableFullNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfig">DataDatabricksQualityMonitorV2AnomalyDetectionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastRunId`<sup>Required</sup> <a name="LastRunId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.lastRunId"></a>

```go
func LastRunId() *string
```

- *Type:* *string

---

##### `LatestRunStatus`<sup>Required</sup> <a name="LatestRunStatus" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.latestRunStatus"></a>

```go
func LatestRunStatus() *string
```

- *Type:* *string

---

##### `ExcludedTableFullNamesInput`<sup>Optional</sup> <a name="ExcludedTableFullNamesInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.excludedTableFullNamesInput"></a>

```go
func ExcludedTableFullNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedTableFullNames`<sup>Required</sup> <a name="ExcludedTableFullNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.excludedTableFullNames"></a>

```go
func ExcludedTableFullNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksQualityMonitorV2AnomalyDetectionConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfig">DataDatabricksQualityMonitorV2AnomalyDetectionConfig</a>

---


### DataDatabricksQualityMonitorV2ProviderConfigOutputReference <a name="DataDatabricksQualityMonitorV2ProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksqualitymonitorv2"

datadatabricksqualitymonitorv2.NewDataDatabricksQualityMonitorV2ProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksQualityMonitorV2ProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList <a name="DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksqualitymonitorv2"

datadatabricksqualitymonitorv2.NewDataDatabricksQualityMonitorV2ValidityCheckConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.get"></a>

```go
func Get(index *f64) DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference <a name="DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksqualitymonitorv2"

datadatabricksqualitymonitorv2.NewDataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.putPercentNullValidityCheck">PutPercentNullValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.putRangeValidityCheck">PutRangeValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.putUniquenessValidityCheck">PutUniquenessValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resetPercentNullValidityCheck">ResetPercentNullValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resetRangeValidityCheck">ResetRangeValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resetUniquenessValidityCheck">ResetUniquenessValidityCheck</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPercentNullValidityCheck` <a name="PutPercentNullValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.putPercentNullValidityCheck"></a>

```go
func PutPercentNullValidityCheck(value DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.putPercentNullValidityCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck</a>

---

##### `PutRangeValidityCheck` <a name="PutRangeValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.putRangeValidityCheck"></a>

```go
func PutRangeValidityCheck(value DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.putRangeValidityCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck</a>

---

##### `PutUniquenessValidityCheck` <a name="PutUniquenessValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.putUniquenessValidityCheck"></a>

```go
func PutUniquenessValidityCheck(value DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.putUniquenessValidityCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck</a>

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPercentNullValidityCheck` <a name="ResetPercentNullValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resetPercentNullValidityCheck"></a>

```go
func ResetPercentNullValidityCheck()
```

##### `ResetRangeValidityCheck` <a name="ResetRangeValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resetRangeValidityCheck"></a>

```go
func ResetRangeValidityCheck()
```

##### `ResetUniquenessValidityCheck` <a name="ResetUniquenessValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resetUniquenessValidityCheck"></a>

```go
func ResetUniquenessValidityCheck()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.percentNullValidityCheck">PercentNullValidityCheck</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.rangeValidityCheck">RangeValidityCheck</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.uniquenessValidityCheck">UniquenessValidityCheck</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.percentNullValidityCheckInput">PercentNullValidityCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.rangeValidityCheckInput">RangeValidityCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.uniquenessValidityCheckInput">UniquenessValidityCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations">DataDatabricksQualityMonitorV2ValidityCheckConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PercentNullValidityCheck`<sup>Required</sup> <a name="PercentNullValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.percentNullValidityCheck"></a>

```go
func PercentNullValidityCheck() DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference</a>

---

##### `RangeValidityCheck`<sup>Required</sup> <a name="RangeValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.rangeValidityCheck"></a>

```go
func RangeValidityCheck() DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference</a>

---

##### `UniquenessValidityCheck`<sup>Required</sup> <a name="UniquenessValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.uniquenessValidityCheck"></a>

```go
func UniquenessValidityCheck() DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PercentNullValidityCheckInput`<sup>Optional</sup> <a name="PercentNullValidityCheckInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.percentNullValidityCheckInput"></a>

```go
func PercentNullValidityCheckInput() interface{}
```

- *Type:* interface{}

---

##### `RangeValidityCheckInput`<sup>Optional</sup> <a name="RangeValidityCheckInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.rangeValidityCheckInput"></a>

```go
func RangeValidityCheckInput() interface{}
```

- *Type:* interface{}

---

##### `UniquenessValidityCheckInput`<sup>Optional</sup> <a name="UniquenessValidityCheckInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.uniquenessValidityCheckInput"></a>

```go
func UniquenessValidityCheckInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksQualityMonitorV2ValidityCheckConfigurations
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations">DataDatabricksQualityMonitorV2ValidityCheckConfigurations</a>

---


### DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference <a name="DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksqualitymonitorv2"

datadatabricksqualitymonitorv2.NewDataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resetColumnNames">ResetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resetUpperBound">ResetUpperBound</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumnNames` <a name="ResetColumnNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resetColumnNames"></a>

```go
func ResetColumnNames()
```

##### `ResetUpperBound` <a name="ResetUpperBound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resetUpperBound"></a>

```go
func ResetUpperBound()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.columnNamesInput">ColumnNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.upperBoundInput">UpperBoundInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.columnNames">ColumnNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.upperBound">UpperBound</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnNamesInput`<sup>Optional</sup> <a name="ColumnNamesInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.columnNamesInput"></a>

```go
func ColumnNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `UpperBoundInput`<sup>Optional</sup> <a name="UpperBoundInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.upperBoundInput"></a>

```go
func UpperBoundInput() *f64
```

- *Type:* *f64

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.columnNames"></a>

```go
func ColumnNames() *[]*string
```

- *Type:* *[]*string

---

##### `UpperBound`<sup>Required</sup> <a name="UpperBound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.upperBound"></a>

```go
func UpperBound() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference <a name="DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksqualitymonitorv2"

datadatabricksqualitymonitorv2.NewDataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resetColumnNames">ResetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resetLowerBound">ResetLowerBound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resetUpperBound">ResetUpperBound</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumnNames` <a name="ResetColumnNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resetColumnNames"></a>

```go
func ResetColumnNames()
```

##### `ResetLowerBound` <a name="ResetLowerBound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resetLowerBound"></a>

```go
func ResetLowerBound()
```

##### `ResetUpperBound` <a name="ResetUpperBound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resetUpperBound"></a>

```go
func ResetUpperBound()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.columnNamesInput">ColumnNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.lowerBoundInput">LowerBoundInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.upperBoundInput">UpperBoundInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.columnNames">ColumnNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.lowerBound">LowerBound</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.upperBound">UpperBound</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnNamesInput`<sup>Optional</sup> <a name="ColumnNamesInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.columnNamesInput"></a>

```go
func ColumnNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LowerBoundInput`<sup>Optional</sup> <a name="LowerBoundInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.lowerBoundInput"></a>

```go
func LowerBoundInput() *f64
```

- *Type:* *f64

---

##### `UpperBoundInput`<sup>Optional</sup> <a name="UpperBoundInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.upperBoundInput"></a>

```go
func UpperBoundInput() *f64
```

- *Type:* *f64

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.columnNames"></a>

```go
func ColumnNames() *[]*string
```

- *Type:* *[]*string

---

##### `LowerBound`<sup>Required</sup> <a name="LowerBound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.lowerBound"></a>

```go
func LowerBound() *f64
```

- *Type:* *f64

---

##### `UpperBound`<sup>Required</sup> <a name="UpperBound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.upperBound"></a>

```go
func UpperBound() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference <a name="DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksqualitymonitorv2"

datadatabricksqualitymonitorv2.NewDataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.resetColumnNames">ResetColumnNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumnNames` <a name="ResetColumnNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.resetColumnNames"></a>

```go
func ResetColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.columnNamesInput">ColumnNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.columnNames">ColumnNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnNamesInput`<sup>Optional</sup> <a name="ColumnNamesInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.columnNamesInput"></a>

```go
func ColumnNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.columnNames"></a>

```go
func ColumnNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



