# `dataDatabricksDataQualityMonitors` Submodule <a name="`dataDatabricksDataQualityMonitors` Submodule" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDataQualityMonitors <a name="DataDatabricksDataQualityMonitors" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors databricks_data_quality_monitors}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

datadatabricksdataqualitymonitors.NewDataDatabricksDataQualityMonitors(scope Construct, id *string, config DataDatabricksDataQualityMonitorsConfig) DataDatabricksDataQualityMonitors
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig">DataDatabricksDataQualityMonitorsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig">DataDatabricksDataQualityMonitorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksDataQualityMonitorsProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfig">DataDatabricksDataQualityMonitorsProviderConfig</a>

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.resetPageSize"></a>

```go
func ResetPageSize()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksDataQualityMonitors resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

datadatabricksdataqualitymonitors.DataDatabricksDataQualityMonitors_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

datadatabricksdataqualitymonitors.DataDatabricksDataQualityMonitors_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

datadatabricksdataqualitymonitors.DataDatabricksDataQualityMonitors_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

datadatabricksdataqualitymonitors.DataDatabricksDataQualityMonitors_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksDataQualityMonitors resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksDataQualityMonitors to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksDataQualityMonitors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksDataQualityMonitors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.monitors">Monitors</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList">DataDatabricksDataQualityMonitorsMonitorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference">DataDatabricksDataQualityMonitorsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.pageSizeInput">PageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.pageSize">PageSize</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Monitors`<sup>Required</sup> <a name="Monitors" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.monitors"></a>

```go
func Monitors() DataDatabricksDataQualityMonitorsMonitorsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList">DataDatabricksDataQualityMonitorsMonitorsList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksDataQualityMonitorsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference">DataDatabricksDataQualityMonitorsProviderConfigOutputReference</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.pageSizeInput"></a>

```go
func PageSizeInput() *f64
```

- *Type:* *f64

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.pageSize"></a>

```go
func PageSize() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDataQualityMonitorsConfig <a name="DataDatabricksDataQualityMonitorsConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

&datadatabricksdataqualitymonitors.DataDatabricksDataQualityMonitorsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	PageSize: *f64,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.pageSize">PageSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#page_size DataDatabricksDataQualityMonitors#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfig">DataDatabricksDataQualityMonitorsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#provider_config DataDatabricksDataQualityMonitors#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.pageSize"></a>

```go
PageSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#page_size DataDatabricksDataQualityMonitors#page_size}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksDataQualityMonitorsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfig">DataDatabricksDataQualityMonitorsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#provider_config DataDatabricksDataQualityMonitors#provider_config}.

---

### DataDatabricksDataQualityMonitorsMonitors <a name="DataDatabricksDataQualityMonitorsMonitors" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

&datadatabricksdataqualitymonitors.DataDatabricksDataQualityMonitorsMonitors {
	ObjectId: *string,
	ObjectType: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitors.property.objectId">ObjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#object_id DataDatabricksDataQualityMonitors#object_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitors.property.objectType">ObjectType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#object_type DataDatabricksDataQualityMonitors#object_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitors.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfig">DataDatabricksDataQualityMonitorsMonitorsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#provider_config DataDatabricksDataQualityMonitors#provider_config}. |

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitors.property.objectId"></a>

```go
ObjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#object_id DataDatabricksDataQualityMonitors#object_id}.

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitors.property.objectType"></a>

```go
ObjectType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#object_type DataDatabricksDataQualityMonitors#object_type}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitors.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksDataQualityMonitorsMonitorsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfig">DataDatabricksDataQualityMonitorsMonitorsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#provider_config DataDatabricksDataQualityMonitors#provider_config}.

---

### DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig <a name="DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

&datadatabricksdataqualitymonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig {
	ExcludedTableFullNames: *[]*string,
	NotificationSettings: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig.property.excludedTableFullNames">ExcludedTableFullNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#excluded_table_full_names DataDatabricksDataQualityMonitors#excluded_table_full_names}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig.property.notificationSettings">NotificationSettings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettings">DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#notification_settings DataDatabricksDataQualityMonitors#notification_settings}. |

---

##### `ExcludedTableFullNames`<sup>Optional</sup> <a name="ExcludedTableFullNames" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig.property.excludedTableFullNames"></a>

```go
ExcludedTableFullNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#excluded_table_full_names DataDatabricksDataQualityMonitors#excluded_table_full_names}.

---

##### `NotificationSettings`<sup>Optional</sup> <a name="NotificationSettings" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig.property.notificationSettings"></a>

```go
NotificationSettings DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettings
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettings">DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#notification_settings DataDatabricksDataQualityMonitors#notification_settings}.

---

### DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettings <a name="DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettings" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

&datadatabricksdataqualitymonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettings {
	OnFailure: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailure,
	OnUnhealthyTable: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTable,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettings.property.onFailure">OnFailure</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailure</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#on_failure DataDatabricksDataQualityMonitors#on_failure}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettings.property.onUnhealthyTable">OnUnhealthyTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTable">DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#on_unhealthy_table DataDatabricksDataQualityMonitors#on_unhealthy_table}. |

---

##### `OnFailure`<sup>Optional</sup> <a name="OnFailure" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettings.property.onFailure"></a>

```go
OnFailure DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailure
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailure</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#on_failure DataDatabricksDataQualityMonitors#on_failure}.

---

##### `OnUnhealthyTable`<sup>Optional</sup> <a name="OnUnhealthyTable" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettings.property.onUnhealthyTable"></a>

```go
OnUnhealthyTable DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTable">DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#on_unhealthy_table DataDatabricksDataQualityMonitors#on_unhealthy_table}.

---

### DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailure <a name="DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailure" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailure.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

&datadatabricksdataqualitymonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailure {
	DestinationIds: *[]*string,
	DestinationUserIds: *[]*f64,
	EmailAddresses: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailure.property.destinationIds">DestinationIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#destination_ids DataDatabricksDataQualityMonitors#destination_ids}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailure.property.destinationUserIds">DestinationUserIds</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#destination_user_ids DataDatabricksDataQualityMonitors#destination_user_ids}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailure.property.emailAddresses">EmailAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#email_addresses DataDatabricksDataQualityMonitors#email_addresses}. |

---

##### `DestinationIds`<sup>Optional</sup> <a name="DestinationIds" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailure.property.destinationIds"></a>

```go
DestinationIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#destination_ids DataDatabricksDataQualityMonitors#destination_ids}.

---

##### `DestinationUserIds`<sup>Optional</sup> <a name="DestinationUserIds" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailure.property.destinationUserIds"></a>

```go
DestinationUserIds *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#destination_user_ids DataDatabricksDataQualityMonitors#destination_user_ids}.

---

##### `EmailAddresses`<sup>Optional</sup> <a name="EmailAddresses" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailure.property.emailAddresses"></a>

```go
EmailAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#email_addresses DataDatabricksDataQualityMonitors#email_addresses}.

---

### DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTable <a name="DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTable" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

&datadatabricksdataqualitymonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTable {
	DestinationIds: *[]*string,
	DestinationUserIds: *[]*f64,
	EmailAddresses: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTable.property.destinationIds">DestinationIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#destination_ids DataDatabricksDataQualityMonitors#destination_ids}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTable.property.destinationUserIds">DestinationUserIds</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#destination_user_ids DataDatabricksDataQualityMonitors#destination_user_ids}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTable.property.emailAddresses">EmailAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#email_addresses DataDatabricksDataQualityMonitors#email_addresses}. |

---

##### `DestinationIds`<sup>Optional</sup> <a name="DestinationIds" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTable.property.destinationIds"></a>

```go
DestinationIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#destination_ids DataDatabricksDataQualityMonitors#destination_ids}.

---

##### `DestinationUserIds`<sup>Optional</sup> <a name="DestinationUserIds" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTable.property.destinationUserIds"></a>

```go
DestinationUserIds *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#destination_user_ids DataDatabricksDataQualityMonitors#destination_user_ids}.

---

##### `EmailAddresses`<sup>Optional</sup> <a name="EmailAddresses" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTable.property.emailAddresses"></a>

```go
EmailAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#email_addresses DataDatabricksDataQualityMonitors#email_addresses}.

---

### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

&datadatabricksdataqualitymonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig {
	OutputSchemaId: *string,
	AssetsDir: *string,
	BaselineTableName: *string,
	CustomMetrics: interface{},
	InferenceLog: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog,
	NotificationSettings: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings,
	Schedule: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule,
	SkipBuiltinDashboard: interface{},
	SlicingExprs: *[]*string,
	Snapshot: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot,
	TimeSeries: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries,
	WarehouseId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.outputSchemaId">OutputSchemaId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#output_schema_id DataDatabricksDataQualityMonitors#output_schema_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.assetsDir">AssetsDir</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#assets_dir DataDatabricksDataQualityMonitors#assets_dir}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.baselineTableName">BaselineTableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#baseline_table_name DataDatabricksDataQualityMonitors#baseline_table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.customMetrics">CustomMetrics</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#custom_metrics DataDatabricksDataQualityMonitors#custom_metrics}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.inferenceLog">InferenceLog</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#inference_log DataDatabricksDataQualityMonitors#inference_log}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.notificationSettings">NotificationSettings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#notification_settings DataDatabricksDataQualityMonitors#notification_settings}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#schedule DataDatabricksDataQualityMonitors#schedule}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.skipBuiltinDashboard">SkipBuiltinDashboard</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#skip_builtin_dashboard DataDatabricksDataQualityMonitors#skip_builtin_dashboard}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.slicingExprs">SlicingExprs</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#slicing_exprs DataDatabricksDataQualityMonitors#slicing_exprs}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.snapshot">Snapshot</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#snapshot DataDatabricksDataQualityMonitors#snapshot}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.timeSeries">TimeSeries</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#time_series DataDatabricksDataQualityMonitors#time_series}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.warehouseId">WarehouseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#warehouse_id DataDatabricksDataQualityMonitors#warehouse_id}. |

---

##### `OutputSchemaId`<sup>Required</sup> <a name="OutputSchemaId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.outputSchemaId"></a>

```go
OutputSchemaId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#output_schema_id DataDatabricksDataQualityMonitors#output_schema_id}.

---

##### `AssetsDir`<sup>Optional</sup> <a name="AssetsDir" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.assetsDir"></a>

```go
AssetsDir *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#assets_dir DataDatabricksDataQualityMonitors#assets_dir}.

---

##### `BaselineTableName`<sup>Optional</sup> <a name="BaselineTableName" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.baselineTableName"></a>

```go
BaselineTableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#baseline_table_name DataDatabricksDataQualityMonitors#baseline_table_name}.

---

##### `CustomMetrics`<sup>Optional</sup> <a name="CustomMetrics" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.customMetrics"></a>

```go
CustomMetrics interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#custom_metrics DataDatabricksDataQualityMonitors#custom_metrics}.

---

##### `InferenceLog`<sup>Optional</sup> <a name="InferenceLog" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.inferenceLog"></a>

```go
InferenceLog DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#inference_log DataDatabricksDataQualityMonitors#inference_log}.

---

##### `NotificationSettings`<sup>Optional</sup> <a name="NotificationSettings" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.notificationSettings"></a>

```go
NotificationSettings DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#notification_settings DataDatabricksDataQualityMonitors#notification_settings}.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.schedule"></a>

```go
Schedule DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#schedule DataDatabricksDataQualityMonitors#schedule}.

---

##### `SkipBuiltinDashboard`<sup>Optional</sup> <a name="SkipBuiltinDashboard" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.skipBuiltinDashboard"></a>

```go
SkipBuiltinDashboard interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#skip_builtin_dashboard DataDatabricksDataQualityMonitors#skip_builtin_dashboard}.

---

##### `SlicingExprs`<sup>Optional</sup> <a name="SlicingExprs" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.slicingExprs"></a>

```go
SlicingExprs *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#slicing_exprs DataDatabricksDataQualityMonitors#slicing_exprs}.

---

##### `Snapshot`<sup>Optional</sup> <a name="Snapshot" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.snapshot"></a>

```go
Snapshot DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#snapshot DataDatabricksDataQualityMonitors#snapshot}.

---

##### `TimeSeries`<sup>Optional</sup> <a name="TimeSeries" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.timeSeries"></a>

```go
TimeSeries DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#time_series DataDatabricksDataQualityMonitors#time_series}.

---

##### `WarehouseId`<sup>Optional</sup> <a name="WarehouseId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.warehouseId"></a>

```go
WarehouseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#warehouse_id DataDatabricksDataQualityMonitors#warehouse_id}.

---

### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

&datadatabricksdataqualitymonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics {
	Definition: *string,
	InputColumns: *[]*string,
	Name: *string,
	OutputDataType: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.property.definition">Definition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#definition DataDatabricksDataQualityMonitors#definition}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.property.inputColumns">InputColumns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#input_columns DataDatabricksDataQualityMonitors#input_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#name DataDatabricksDataQualityMonitors#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.property.outputDataType">OutputDataType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#output_data_type DataDatabricksDataQualityMonitors#output_data_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#type DataDatabricksDataQualityMonitors#type}. |

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.property.definition"></a>

```go
Definition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#definition DataDatabricksDataQualityMonitors#definition}.

---

##### `InputColumns`<sup>Required</sup> <a name="InputColumns" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.property.inputColumns"></a>

```go
InputColumns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#input_columns DataDatabricksDataQualityMonitors#input_columns}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#name DataDatabricksDataQualityMonitors#name}.

---

##### `OutputDataType`<sup>Required</sup> <a name="OutputDataType" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.property.outputDataType"></a>

```go
OutputDataType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#output_data_type DataDatabricksDataQualityMonitors#output_data_type}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#type DataDatabricksDataQualityMonitors#type}.

---

### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

&datadatabricksdataqualitymonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog {
	Granularities: *[]*string,
	ModelIdColumn: *string,
	PredictionColumn: *string,
	ProblemType: *string,
	TimestampColumn: *string,
	LabelColumn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.granularities">Granularities</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#granularities DataDatabricksDataQualityMonitors#granularities}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.modelIdColumn">ModelIdColumn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#model_id_column DataDatabricksDataQualityMonitors#model_id_column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.predictionColumn">PredictionColumn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#prediction_column DataDatabricksDataQualityMonitors#prediction_column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.problemType">ProblemType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#problem_type DataDatabricksDataQualityMonitors#problem_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.timestampColumn">TimestampColumn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#timestamp_column DataDatabricksDataQualityMonitors#timestamp_column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.labelColumn">LabelColumn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#label_column DataDatabricksDataQualityMonitors#label_column}. |

---

##### `Granularities`<sup>Required</sup> <a name="Granularities" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.granularities"></a>

```go
Granularities *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#granularities DataDatabricksDataQualityMonitors#granularities}.

---

##### `ModelIdColumn`<sup>Required</sup> <a name="ModelIdColumn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.modelIdColumn"></a>

```go
ModelIdColumn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#model_id_column DataDatabricksDataQualityMonitors#model_id_column}.

---

##### `PredictionColumn`<sup>Required</sup> <a name="PredictionColumn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.predictionColumn"></a>

```go
PredictionColumn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#prediction_column DataDatabricksDataQualityMonitors#prediction_column}.

---

##### `ProblemType`<sup>Required</sup> <a name="ProblemType" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.problemType"></a>

```go
ProblemType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#problem_type DataDatabricksDataQualityMonitors#problem_type}.

---

##### `TimestampColumn`<sup>Required</sup> <a name="TimestampColumn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.timestampColumn"></a>

```go
TimestampColumn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#timestamp_column DataDatabricksDataQualityMonitors#timestamp_column}.

---

##### `LabelColumn`<sup>Optional</sup> <a name="LabelColumn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.labelColumn"></a>

```go
LabelColumn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#label_column DataDatabricksDataQualityMonitors#label_column}.

---

### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

&datadatabricksdataqualitymonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings {
	OnFailure: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure,
	OnUnhealthyTable: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTable,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings.property.onFailure">OnFailure</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#on_failure DataDatabricksDataQualityMonitors#on_failure}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings.property.onUnhealthyTable">OnUnhealthyTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTable">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#on_unhealthy_table DataDatabricksDataQualityMonitors#on_unhealthy_table}. |

---

##### `OnFailure`<sup>Optional</sup> <a name="OnFailure" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings.property.onFailure"></a>

```go
OnFailure DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#on_failure DataDatabricksDataQualityMonitors#on_failure}.

---

##### `OnUnhealthyTable`<sup>Optional</sup> <a name="OnUnhealthyTable" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings.property.onUnhealthyTable"></a>

```go
OnUnhealthyTable DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTable">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#on_unhealthy_table DataDatabricksDataQualityMonitors#on_unhealthy_table}.

---

### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

&datadatabricksdataqualitymonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure {
	DestinationIds: *[]*string,
	DestinationUserIds: *[]*f64,
	EmailAddresses: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure.property.destinationIds">DestinationIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#destination_ids DataDatabricksDataQualityMonitors#destination_ids}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure.property.destinationUserIds">DestinationUserIds</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#destination_user_ids DataDatabricksDataQualityMonitors#destination_user_ids}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure.property.emailAddresses">EmailAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#email_addresses DataDatabricksDataQualityMonitors#email_addresses}. |

---

##### `DestinationIds`<sup>Optional</sup> <a name="DestinationIds" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure.property.destinationIds"></a>

```go
DestinationIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#destination_ids DataDatabricksDataQualityMonitors#destination_ids}.

---

##### `DestinationUserIds`<sup>Optional</sup> <a name="DestinationUserIds" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure.property.destinationUserIds"></a>

```go
DestinationUserIds *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#destination_user_ids DataDatabricksDataQualityMonitors#destination_user_ids}.

---

##### `EmailAddresses`<sup>Optional</sup> <a name="EmailAddresses" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure.property.emailAddresses"></a>

```go
EmailAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#email_addresses DataDatabricksDataQualityMonitors#email_addresses}.

---

### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTable <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTable" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

&datadatabricksdataqualitymonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTable {
	DestinationIds: *[]*string,
	DestinationUserIds: *[]*f64,
	EmailAddresses: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTable.property.destinationIds">DestinationIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#destination_ids DataDatabricksDataQualityMonitors#destination_ids}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTable.property.destinationUserIds">DestinationUserIds</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#destination_user_ids DataDatabricksDataQualityMonitors#destination_user_ids}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTable.property.emailAddresses">EmailAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#email_addresses DataDatabricksDataQualityMonitors#email_addresses}. |

---

##### `DestinationIds`<sup>Optional</sup> <a name="DestinationIds" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTable.property.destinationIds"></a>

```go
DestinationIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#destination_ids DataDatabricksDataQualityMonitors#destination_ids}.

---

##### `DestinationUserIds`<sup>Optional</sup> <a name="DestinationUserIds" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTable.property.destinationUserIds"></a>

```go
DestinationUserIds *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#destination_user_ids DataDatabricksDataQualityMonitors#destination_user_ids}.

---

##### `EmailAddresses`<sup>Optional</sup> <a name="EmailAddresses" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTable.property.emailAddresses"></a>

```go
EmailAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#email_addresses DataDatabricksDataQualityMonitors#email_addresses}.

---

### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

&datadatabricksdataqualitymonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule {
	QuartzCronExpression: *string,
	TimezoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule.property.quartzCronExpression">QuartzCronExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#quartz_cron_expression DataDatabricksDataQualityMonitors#quartz_cron_expression}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule.property.timezoneId">TimezoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#timezone_id DataDatabricksDataQualityMonitors#timezone_id}. |

---

##### `QuartzCronExpression`<sup>Required</sup> <a name="QuartzCronExpression" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule.property.quartzCronExpression"></a>

```go
QuartzCronExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#quartz_cron_expression DataDatabricksDataQualityMonitors#quartz_cron_expression}.

---

##### `TimezoneId`<sup>Required</sup> <a name="TimezoneId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule.property.timezoneId"></a>

```go
TimezoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#timezone_id DataDatabricksDataQualityMonitors#timezone_id}.

---

### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

&datadatabricksdataqualitymonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot {

}
```


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

&datadatabricksdataqualitymonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries {
	Granularities: *[]*string,
	TimestampColumn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries.property.granularities">Granularities</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#granularities DataDatabricksDataQualityMonitors#granularities}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries.property.timestampColumn">TimestampColumn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#timestamp_column DataDatabricksDataQualityMonitors#timestamp_column}. |

---

##### `Granularities`<sup>Required</sup> <a name="Granularities" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries.property.granularities"></a>

```go
Granularities *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#granularities DataDatabricksDataQualityMonitors#granularities}.

---

##### `TimestampColumn`<sup>Required</sup> <a name="TimestampColumn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries.property.timestampColumn"></a>

```go
TimestampColumn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#timestamp_column DataDatabricksDataQualityMonitors#timestamp_column}.

---

### DataDatabricksDataQualityMonitorsMonitorsProviderConfig <a name="DataDatabricksDataQualityMonitorsMonitorsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

&datadatabricksdataqualitymonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#workspace_id DataDatabricksDataQualityMonitors#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#workspace_id DataDatabricksDataQualityMonitors#workspace_id}.

---

### DataDatabricksDataQualityMonitorsProviderConfig <a name="DataDatabricksDataQualityMonitorsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

&datadatabricksdataqualitymonitors.DataDatabricksDataQualityMonitorsProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#workspace_id DataDatabricksDataQualityMonitors#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/data_quality_monitors#workspace_id DataDatabricksDataQualityMonitors#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

datadatabricksdataqualitymonitors.NewDataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.resetDestinationIds">ResetDestinationIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.resetDestinationUserIds">ResetDestinationUserIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.resetEmailAddresses">ResetEmailAddresses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationIds` <a name="ResetDestinationIds" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.resetDestinationIds"></a>

```go
func ResetDestinationIds()
```

##### `ResetDestinationUserIds` <a name="ResetDestinationUserIds" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.resetDestinationUserIds"></a>

```go
func ResetDestinationUserIds()
```

##### `ResetEmailAddresses` <a name="ResetEmailAddresses" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.resetEmailAddresses"></a>

```go
func ResetEmailAddresses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.property.destinationIdsInput">DestinationIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.property.destinationUserIdsInput">DestinationUserIdsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.property.emailAddressesInput">EmailAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.property.destinationIds">DestinationIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.property.destinationUserIds">DestinationUserIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.property.emailAddresses">EmailAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationIdsInput`<sup>Optional</sup> <a name="DestinationIdsInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.property.destinationIdsInput"></a>

```go
func DestinationIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationUserIdsInput`<sup>Optional</sup> <a name="DestinationUserIdsInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.property.destinationUserIdsInput"></a>

```go
func DestinationUserIdsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `EmailAddressesInput`<sup>Optional</sup> <a name="EmailAddressesInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.property.emailAddressesInput"></a>

```go
func EmailAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationIds`<sup>Required</sup> <a name="DestinationIds" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.property.destinationIds"></a>

```go
func DestinationIds() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationUserIds`<sup>Required</sup> <a name="DestinationUserIds" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.property.destinationUserIds"></a>

```go
func DestinationUserIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `EmailAddresses`<sup>Required</sup> <a name="EmailAddresses" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.property.emailAddresses"></a>

```go
func EmailAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

datadatabricksdataqualitymonitors.NewDataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.resetDestinationIds">ResetDestinationIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.resetDestinationUserIds">ResetDestinationUserIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.resetEmailAddresses">ResetEmailAddresses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationIds` <a name="ResetDestinationIds" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.resetDestinationIds"></a>

```go
func ResetDestinationIds()
```

##### `ResetDestinationUserIds` <a name="ResetDestinationUserIds" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.resetDestinationUserIds"></a>

```go
func ResetDestinationUserIds()
```

##### `ResetEmailAddresses` <a name="ResetEmailAddresses" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.resetEmailAddresses"></a>

```go
func ResetEmailAddresses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.property.destinationIdsInput">DestinationIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.property.destinationUserIdsInput">DestinationUserIdsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.property.emailAddressesInput">EmailAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.property.destinationIds">DestinationIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.property.destinationUserIds">DestinationUserIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.property.emailAddresses">EmailAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationIdsInput`<sup>Optional</sup> <a name="DestinationIdsInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.property.destinationIdsInput"></a>

```go
func DestinationIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationUserIdsInput`<sup>Optional</sup> <a name="DestinationUserIdsInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.property.destinationUserIdsInput"></a>

```go
func DestinationUserIdsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `EmailAddressesInput`<sup>Optional</sup> <a name="EmailAddressesInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.property.emailAddressesInput"></a>

```go
func EmailAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationIds`<sup>Required</sup> <a name="DestinationIds" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.property.destinationIds"></a>

```go
func DestinationIds() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationUserIds`<sup>Required</sup> <a name="DestinationUserIds" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.property.destinationUserIds"></a>

```go
func DestinationUserIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `EmailAddresses`<sup>Required</sup> <a name="EmailAddresses" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.property.emailAddresses"></a>

```go
func EmailAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

datadatabricksdataqualitymonitors.NewDataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.putOnFailure">PutOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.putOnUnhealthyTable">PutOnUnhealthyTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.resetOnFailure">ResetOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.resetOnUnhealthyTable">ResetOnUnhealthyTable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOnFailure` <a name="PutOnFailure" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.putOnFailure"></a>

```go
func PutOnFailure(value DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailure)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.putOnFailure.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailure</a>

---

##### `PutOnUnhealthyTable` <a name="PutOnUnhealthyTable" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.putOnUnhealthyTable"></a>

```go
func PutOnUnhealthyTable(value DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.putOnUnhealthyTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTable">DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTable</a>

---

##### `ResetOnFailure` <a name="ResetOnFailure" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.resetOnFailure"></a>

```go
func ResetOnFailure()
```

##### `ResetOnUnhealthyTable` <a name="ResetOnUnhealthyTable" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.resetOnUnhealthyTable"></a>

```go
func ResetOnUnhealthyTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.property.onFailure">OnFailure</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference">DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.property.onUnhealthyTable">OnUnhealthyTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference">DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.property.onFailureInput">OnFailureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.property.onUnhealthyTableInput">OnUnhealthyTableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OnFailure`<sup>Required</sup> <a name="OnFailure" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.property.onFailure"></a>

```go
func OnFailure() DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference">DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnFailureOutputReference</a>

---

##### `OnUnhealthyTable`<sup>Required</sup> <a name="OnUnhealthyTable" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.property.onUnhealthyTable"></a>

```go
func OnUnhealthyTable() DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference">DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOnUnhealthyTableOutputReference</a>

---

##### `OnFailureInput`<sup>Optional</sup> <a name="OnFailureInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.property.onFailureInput"></a>

```go
func OnFailureInput() interface{}
```

- *Type:* interface{}

---

##### `OnUnhealthyTableInput`<sup>Optional</sup> <a name="OnUnhealthyTableInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.property.onUnhealthyTableInput"></a>

```go
func OnUnhealthyTableInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

datadatabricksdataqualitymonitors.NewDataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.putNotificationSettings">PutNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.resetExcludedTableFullNames">ResetExcludedTableFullNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.resetNotificationSettings">ResetNotificationSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNotificationSettings` <a name="PutNotificationSettings" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.putNotificationSettings"></a>

```go
func PutNotificationSettings(value DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.putNotificationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettings">DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettings</a>

---

##### `ResetExcludedTableFullNames` <a name="ResetExcludedTableFullNames" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.resetExcludedTableFullNames"></a>

```go
func ResetExcludedTableFullNames()
```

##### `ResetNotificationSettings` <a name="ResetNotificationSettings" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.resetNotificationSettings"></a>

```go
func ResetNotificationSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.property.notificationSettings">NotificationSettings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference">DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.property.excludedTableFullNamesInput">ExcludedTableFullNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.property.notificationSettingsInput">NotificationSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.property.excludedTableFullNames">ExcludedTableFullNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig">DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NotificationSettings`<sup>Required</sup> <a name="NotificationSettings" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.property.notificationSettings"></a>

```go
func NotificationSettings() DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference">DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigNotificationSettingsOutputReference</a>

---

##### `ExcludedTableFullNamesInput`<sup>Optional</sup> <a name="ExcludedTableFullNamesInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.property.excludedTableFullNamesInput"></a>

```go
func ExcludedTableFullNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NotificationSettingsInput`<sup>Optional</sup> <a name="NotificationSettingsInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.property.notificationSettingsInput"></a>

```go
func NotificationSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludedTableFullNames`<sup>Required</sup> <a name="ExcludedTableFullNames" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.property.excludedTableFullNames"></a>

```go
func ExcludedTableFullNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig">DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig</a>

---


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

datadatabricksdataqualitymonitors.NewDataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.get"></a>

```go
func Get(index *f64) DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

datadatabricksdataqualitymonitors.NewDataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.definitionInput">DefinitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.inputColumnsInput">InputColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.outputDataTypeInput">OutputDataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.definition">Definition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.inputColumns">InputColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.outputDataType">OutputDataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.definitionInput"></a>

```go
func DefinitionInput() *string
```

- *Type:* *string

---

##### `InputColumnsInput`<sup>Optional</sup> <a name="InputColumnsInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.inputColumnsInput"></a>

```go
func InputColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OutputDataTypeInput`<sup>Optional</sup> <a name="OutputDataTypeInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.outputDataTypeInput"></a>

```go
func OutputDataTypeInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.definition"></a>

```go
func Definition() *string
```

- *Type:* *string

---

##### `InputColumns`<sup>Required</sup> <a name="InputColumns" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.inputColumns"></a>

```go
func InputColumns() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OutputDataType`<sup>Required</sup> <a name="OutputDataType" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.outputDataType"></a>

```go
func OutputDataType() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

datadatabricksdataqualitymonitors.NewDataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.resetLabelColumn">ResetLabelColumn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabelColumn` <a name="ResetLabelColumn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.resetLabelColumn"></a>

```go
func ResetLabelColumn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.granularitiesInput">GranularitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.labelColumnInput">LabelColumnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.modelIdColumnInput">ModelIdColumnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.predictionColumnInput">PredictionColumnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.problemTypeInput">ProblemTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.timestampColumnInput">TimestampColumnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.granularities">Granularities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.labelColumn">LabelColumn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.modelIdColumn">ModelIdColumn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.predictionColumn">PredictionColumn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.problemType">ProblemType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.timestampColumn">TimestampColumn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GranularitiesInput`<sup>Optional</sup> <a name="GranularitiesInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.granularitiesInput"></a>

```go
func GranularitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LabelColumnInput`<sup>Optional</sup> <a name="LabelColumnInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.labelColumnInput"></a>

```go
func LabelColumnInput() *string
```

- *Type:* *string

---

##### `ModelIdColumnInput`<sup>Optional</sup> <a name="ModelIdColumnInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.modelIdColumnInput"></a>

```go
func ModelIdColumnInput() *string
```

- *Type:* *string

---

##### `PredictionColumnInput`<sup>Optional</sup> <a name="PredictionColumnInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.predictionColumnInput"></a>

```go
func PredictionColumnInput() *string
```

- *Type:* *string

---

##### `ProblemTypeInput`<sup>Optional</sup> <a name="ProblemTypeInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.problemTypeInput"></a>

```go
func ProblemTypeInput() *string
```

- *Type:* *string

---

##### `TimestampColumnInput`<sup>Optional</sup> <a name="TimestampColumnInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.timestampColumnInput"></a>

```go
func TimestampColumnInput() *string
```

- *Type:* *string

---

##### `Granularities`<sup>Required</sup> <a name="Granularities" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.granularities"></a>

```go
func Granularities() *[]*string
```

- *Type:* *[]*string

---

##### `LabelColumn`<sup>Required</sup> <a name="LabelColumn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.labelColumn"></a>

```go
func LabelColumn() *string
```

- *Type:* *string

---

##### `ModelIdColumn`<sup>Required</sup> <a name="ModelIdColumn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.modelIdColumn"></a>

```go
func ModelIdColumn() *string
```

- *Type:* *string

---

##### `PredictionColumn`<sup>Required</sup> <a name="PredictionColumn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.predictionColumn"></a>

```go
func PredictionColumn() *string
```

- *Type:* *string

---

##### `ProblemType`<sup>Required</sup> <a name="ProblemType" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.problemType"></a>

```go
func ProblemType() *string
```

- *Type:* *string

---

##### `TimestampColumn`<sup>Required</sup> <a name="TimestampColumn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.timestampColumn"></a>

```go
func TimestampColumn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

datadatabricksdataqualitymonitors.NewDataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.resetDestinationIds">ResetDestinationIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.resetDestinationUserIds">ResetDestinationUserIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.resetEmailAddresses">ResetEmailAddresses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationIds` <a name="ResetDestinationIds" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.resetDestinationIds"></a>

```go
func ResetDestinationIds()
```

##### `ResetDestinationUserIds` <a name="ResetDestinationUserIds" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.resetDestinationUserIds"></a>

```go
func ResetDestinationUserIds()
```

##### `ResetEmailAddresses` <a name="ResetEmailAddresses" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.resetEmailAddresses"></a>

```go
func ResetEmailAddresses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.destinationIdsInput">DestinationIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.destinationUserIdsInput">DestinationUserIdsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.emailAddressesInput">EmailAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.destinationIds">DestinationIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.destinationUserIds">DestinationUserIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.emailAddresses">EmailAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationIdsInput`<sup>Optional</sup> <a name="DestinationIdsInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.destinationIdsInput"></a>

```go
func DestinationIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationUserIdsInput`<sup>Optional</sup> <a name="DestinationUserIdsInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.destinationUserIdsInput"></a>

```go
func DestinationUserIdsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `EmailAddressesInput`<sup>Optional</sup> <a name="EmailAddressesInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.emailAddressesInput"></a>

```go
func EmailAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationIds`<sup>Required</sup> <a name="DestinationIds" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.destinationIds"></a>

```go
func DestinationIds() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationUserIds`<sup>Required</sup> <a name="DestinationUserIds" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.destinationUserIds"></a>

```go
func DestinationUserIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `EmailAddresses`<sup>Required</sup> <a name="EmailAddresses" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.emailAddresses"></a>

```go
func EmailAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

datadatabricksdataqualitymonitors.NewDataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.resetDestinationIds">ResetDestinationIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.resetDestinationUserIds">ResetDestinationUserIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.resetEmailAddresses">ResetEmailAddresses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationIds` <a name="ResetDestinationIds" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.resetDestinationIds"></a>

```go
func ResetDestinationIds()
```

##### `ResetDestinationUserIds` <a name="ResetDestinationUserIds" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.resetDestinationUserIds"></a>

```go
func ResetDestinationUserIds()
```

##### `ResetEmailAddresses` <a name="ResetEmailAddresses" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.resetEmailAddresses"></a>

```go
func ResetEmailAddresses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.property.destinationIdsInput">DestinationIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.property.destinationUserIdsInput">DestinationUserIdsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.property.emailAddressesInput">EmailAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.property.destinationIds">DestinationIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.property.destinationUserIds">DestinationUserIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.property.emailAddresses">EmailAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationIdsInput`<sup>Optional</sup> <a name="DestinationIdsInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.property.destinationIdsInput"></a>

```go
func DestinationIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationUserIdsInput`<sup>Optional</sup> <a name="DestinationUserIdsInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.property.destinationUserIdsInput"></a>

```go
func DestinationUserIdsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `EmailAddressesInput`<sup>Optional</sup> <a name="EmailAddressesInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.property.emailAddressesInput"></a>

```go
func EmailAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationIds`<sup>Required</sup> <a name="DestinationIds" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.property.destinationIds"></a>

```go
func DestinationIds() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationUserIds`<sup>Required</sup> <a name="DestinationUserIds" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.property.destinationUserIds"></a>

```go
func DestinationUserIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `EmailAddresses`<sup>Required</sup> <a name="EmailAddresses" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.property.emailAddresses"></a>

```go
func EmailAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

datadatabricksdataqualitymonitors.NewDataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.putOnFailure">PutOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.putOnUnhealthyTable">PutOnUnhealthyTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.resetOnFailure">ResetOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.resetOnUnhealthyTable">ResetOnUnhealthyTable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOnFailure` <a name="PutOnFailure" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.putOnFailure"></a>

```go
func PutOnFailure(value DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.putOnFailure.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure</a>

---

##### `PutOnUnhealthyTable` <a name="PutOnUnhealthyTable" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.putOnUnhealthyTable"></a>

```go
func PutOnUnhealthyTable(value DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.putOnUnhealthyTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTable">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTable</a>

---

##### `ResetOnFailure` <a name="ResetOnFailure" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.resetOnFailure"></a>

```go
func ResetOnFailure()
```

##### `ResetOnUnhealthyTable` <a name="ResetOnUnhealthyTable" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.resetOnUnhealthyTable"></a>

```go
func ResetOnUnhealthyTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.onFailure">OnFailure</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.onUnhealthyTable">OnUnhealthyTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.onFailureInput">OnFailureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.onUnhealthyTableInput">OnUnhealthyTableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OnFailure`<sup>Required</sup> <a name="OnFailure" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.onFailure"></a>

```go
func OnFailure() DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference</a>

---

##### `OnUnhealthyTable`<sup>Required</sup> <a name="OnUnhealthyTable" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.onUnhealthyTable"></a>

```go
func OnUnhealthyTable() DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnUnhealthyTableOutputReference</a>

---

##### `OnFailureInput`<sup>Optional</sup> <a name="OnFailureInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.onFailureInput"></a>

```go
func OnFailureInput() interface{}
```

- *Type:* interface{}

---

##### `OnUnhealthyTableInput`<sup>Optional</sup> <a name="OnUnhealthyTableInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.onUnhealthyTableInput"></a>

```go
func OnUnhealthyTableInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

datadatabricksdataqualitymonitors.NewDataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putCustomMetrics">PutCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putInferenceLog">PutInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putNotificationSettings">PutNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putSnapshot">PutSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putTimeSeries">PutTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetAssetsDir">ResetAssetsDir</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetBaselineTableName">ResetBaselineTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetCustomMetrics">ResetCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetInferenceLog">ResetInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetNotificationSettings">ResetNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetSkipBuiltinDashboard">ResetSkipBuiltinDashboard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetSlicingExprs">ResetSlicingExprs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetSnapshot">ResetSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetTimeSeries">ResetTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetWarehouseId">ResetWarehouseId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomMetrics` <a name="PutCustomMetrics" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putCustomMetrics"></a>

```go
func PutCustomMetrics(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putCustomMetrics.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInferenceLog` <a name="PutInferenceLog" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putInferenceLog"></a>

```go
func PutInferenceLog(value DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putInferenceLog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog</a>

---

##### `PutNotificationSettings` <a name="PutNotificationSettings" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putNotificationSettings"></a>

```go
func PutNotificationSettings(value DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putNotificationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putSchedule"></a>

```go
func PutSchedule(value DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule</a>

---

##### `PutSnapshot` <a name="PutSnapshot" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putSnapshot"></a>

```go
func PutSnapshot(value DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putSnapshot.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot</a>

---

##### `PutTimeSeries` <a name="PutTimeSeries" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putTimeSeries"></a>

```go
func PutTimeSeries(value DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putTimeSeries.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries</a>

---

##### `ResetAssetsDir` <a name="ResetAssetsDir" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetAssetsDir"></a>

```go
func ResetAssetsDir()
```

##### `ResetBaselineTableName` <a name="ResetBaselineTableName" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetBaselineTableName"></a>

```go
func ResetBaselineTableName()
```

##### `ResetCustomMetrics` <a name="ResetCustomMetrics" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetCustomMetrics"></a>

```go
func ResetCustomMetrics()
```

##### `ResetInferenceLog` <a name="ResetInferenceLog" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetInferenceLog"></a>

```go
func ResetInferenceLog()
```

##### `ResetNotificationSettings` <a name="ResetNotificationSettings" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetNotificationSettings"></a>

```go
func ResetNotificationSettings()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetSkipBuiltinDashboard` <a name="ResetSkipBuiltinDashboard" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetSkipBuiltinDashboard"></a>

```go
func ResetSkipBuiltinDashboard()
```

##### `ResetSlicingExprs` <a name="ResetSlicingExprs" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetSlicingExprs"></a>

```go
func ResetSlicingExprs()
```

##### `ResetSnapshot` <a name="ResetSnapshot" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetSnapshot"></a>

```go
func ResetSnapshot()
```

##### `ResetTimeSeries` <a name="ResetTimeSeries" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetTimeSeries"></a>

```go
func ResetTimeSeries()
```

##### `ResetWarehouseId` <a name="ResetWarehouseId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetWarehouseId"></a>

```go
func ResetWarehouseId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.customMetrics">CustomMetrics</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.dashboardId">DashboardId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.driftMetricsTableName">DriftMetricsTableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.effectiveWarehouseId">EffectiveWarehouseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.inferenceLog">InferenceLog</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.latestMonitorFailureMessage">LatestMonitorFailureMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.monitoredTableName">MonitoredTableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.monitorVersion">MonitorVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.notificationSettings">NotificationSettings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.profileMetricsTableName">ProfileMetricsTableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.snapshot">Snapshot</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.timeSeries">TimeSeries</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.assetsDirInput">AssetsDirInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.baselineTableNameInput">BaselineTableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.customMetricsInput">CustomMetricsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.inferenceLogInput">InferenceLogInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.notificationSettingsInput">NotificationSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.outputSchemaIdInput">OutputSchemaIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.skipBuiltinDashboardInput">SkipBuiltinDashboardInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.slicingExprsInput">SlicingExprsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.snapshotInput">SnapshotInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.timeSeriesInput">TimeSeriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.warehouseIdInput">WarehouseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.assetsDir">AssetsDir</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.baselineTableName">BaselineTableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.outputSchemaId">OutputSchemaId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.skipBuiltinDashboard">SkipBuiltinDashboard</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.slicingExprs">SlicingExprs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.warehouseId">WarehouseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomMetrics`<sup>Required</sup> <a name="CustomMetrics" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.customMetrics"></a>

```go
func CustomMetrics() DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList</a>

---

##### `DashboardId`<sup>Required</sup> <a name="DashboardId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.dashboardId"></a>

```go
func DashboardId() *string
```

- *Type:* *string

---

##### `DriftMetricsTableName`<sup>Required</sup> <a name="DriftMetricsTableName" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.driftMetricsTableName"></a>

```go
func DriftMetricsTableName() *string
```

- *Type:* *string

---

##### `EffectiveWarehouseId`<sup>Required</sup> <a name="EffectiveWarehouseId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.effectiveWarehouseId"></a>

```go
func EffectiveWarehouseId() *string
```

- *Type:* *string

---

##### `InferenceLog`<sup>Required</sup> <a name="InferenceLog" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.inferenceLog"></a>

```go
func InferenceLog() DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference</a>

---

##### `LatestMonitorFailureMessage`<sup>Required</sup> <a name="LatestMonitorFailureMessage" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.latestMonitorFailureMessage"></a>

```go
func LatestMonitorFailureMessage() *string
```

- *Type:* *string

---

##### `MonitoredTableName`<sup>Required</sup> <a name="MonitoredTableName" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.monitoredTableName"></a>

```go
func MonitoredTableName() *string
```

- *Type:* *string

---

##### `MonitorVersion`<sup>Required</sup> <a name="MonitorVersion" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.monitorVersion"></a>

```go
func MonitorVersion() *f64
```

- *Type:* *f64

---

##### `NotificationSettings`<sup>Required</sup> <a name="NotificationSettings" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.notificationSettings"></a>

```go
func NotificationSettings() DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference</a>

---

##### `ProfileMetricsTableName`<sup>Required</sup> <a name="ProfileMetricsTableName" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.profileMetricsTableName"></a>

```go
func ProfileMetricsTableName() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.schedule"></a>

```go
func Schedule() DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference</a>

---

##### `Snapshot`<sup>Required</sup> <a name="Snapshot" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.snapshot"></a>

```go
func Snapshot() DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TimeSeries`<sup>Required</sup> <a name="TimeSeries" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.timeSeries"></a>

```go
func TimeSeries() DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference</a>

---

##### `AssetsDirInput`<sup>Optional</sup> <a name="AssetsDirInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.assetsDirInput"></a>

```go
func AssetsDirInput() *string
```

- *Type:* *string

---

##### `BaselineTableNameInput`<sup>Optional</sup> <a name="BaselineTableNameInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.baselineTableNameInput"></a>

```go
func BaselineTableNameInput() *string
```

- *Type:* *string

---

##### `CustomMetricsInput`<sup>Optional</sup> <a name="CustomMetricsInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.customMetricsInput"></a>

```go
func CustomMetricsInput() interface{}
```

- *Type:* interface{}

---

##### `InferenceLogInput`<sup>Optional</sup> <a name="InferenceLogInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.inferenceLogInput"></a>

```go
func InferenceLogInput() interface{}
```

- *Type:* interface{}

---

##### `NotificationSettingsInput`<sup>Optional</sup> <a name="NotificationSettingsInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.notificationSettingsInput"></a>

```go
func NotificationSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `OutputSchemaIdInput`<sup>Optional</sup> <a name="OutputSchemaIdInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.outputSchemaIdInput"></a>

```go
func OutputSchemaIdInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.scheduleInput"></a>

```go
func ScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `SkipBuiltinDashboardInput`<sup>Optional</sup> <a name="SkipBuiltinDashboardInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.skipBuiltinDashboardInput"></a>

```go
func SkipBuiltinDashboardInput() interface{}
```

- *Type:* interface{}

---

##### `SlicingExprsInput`<sup>Optional</sup> <a name="SlicingExprsInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.slicingExprsInput"></a>

```go
func SlicingExprsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SnapshotInput`<sup>Optional</sup> <a name="SnapshotInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.snapshotInput"></a>

```go
func SnapshotInput() interface{}
```

- *Type:* interface{}

---

##### `TimeSeriesInput`<sup>Optional</sup> <a name="TimeSeriesInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.timeSeriesInput"></a>

```go
func TimeSeriesInput() interface{}
```

- *Type:* interface{}

---

##### `WarehouseIdInput`<sup>Optional</sup> <a name="WarehouseIdInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.warehouseIdInput"></a>

```go
func WarehouseIdInput() *string
```

- *Type:* *string

---

##### `AssetsDir`<sup>Required</sup> <a name="AssetsDir" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.assetsDir"></a>

```go
func AssetsDir() *string
```

- *Type:* *string

---

##### `BaselineTableName`<sup>Required</sup> <a name="BaselineTableName" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.baselineTableName"></a>

```go
func BaselineTableName() *string
```

- *Type:* *string

---

##### `OutputSchemaId`<sup>Required</sup> <a name="OutputSchemaId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.outputSchemaId"></a>

```go
func OutputSchemaId() *string
```

- *Type:* *string

---

##### `SkipBuiltinDashboard`<sup>Required</sup> <a name="SkipBuiltinDashboard" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.skipBuiltinDashboard"></a>

```go
func SkipBuiltinDashboard() interface{}
```

- *Type:* interface{}

---

##### `SlicingExprs`<sup>Required</sup> <a name="SlicingExprs" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.slicingExprs"></a>

```go
func SlicingExprs() *[]*string
```

- *Type:* *[]*string

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.warehouseId"></a>

```go
func WarehouseId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig</a>

---


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

datadatabricksdataqualitymonitors.NewDataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.pauseStatus">PauseStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.quartzCronExpressionInput">QuartzCronExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.timezoneIdInput">TimezoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.quartzCronExpression">QuartzCronExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.timezoneId">TimezoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PauseStatus`<sup>Required</sup> <a name="PauseStatus" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.pauseStatus"></a>

```go
func PauseStatus() *string
```

- *Type:* *string

---

##### `QuartzCronExpressionInput`<sup>Optional</sup> <a name="QuartzCronExpressionInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.quartzCronExpressionInput"></a>

```go
func QuartzCronExpressionInput() *string
```

- *Type:* *string

---

##### `TimezoneIdInput`<sup>Optional</sup> <a name="TimezoneIdInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.timezoneIdInput"></a>

```go
func TimezoneIdInput() *string
```

- *Type:* *string

---

##### `QuartzCronExpression`<sup>Required</sup> <a name="QuartzCronExpression" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.quartzCronExpression"></a>

```go
func QuartzCronExpression() *string
```

- *Type:* *string

---

##### `TimezoneId`<sup>Required</sup> <a name="TimezoneId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.timezoneId"></a>

```go
func TimezoneId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

datadatabricksdataqualitymonitors.NewDataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

datadatabricksdataqualitymonitors.NewDataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.granularitiesInput">GranularitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.timestampColumnInput">TimestampColumnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.granularities">Granularities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.timestampColumn">TimestampColumn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GranularitiesInput`<sup>Optional</sup> <a name="GranularitiesInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.granularitiesInput"></a>

```go
func GranularitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimestampColumnInput`<sup>Optional</sup> <a name="TimestampColumnInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.timestampColumnInput"></a>

```go
func TimestampColumnInput() *string
```

- *Type:* *string

---

##### `Granularities`<sup>Required</sup> <a name="Granularities" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.granularities"></a>

```go
func Granularities() *[]*string
```

- *Type:* *[]*string

---

##### `TimestampColumn`<sup>Required</sup> <a name="TimestampColumn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.timestampColumn"></a>

```go
func TimestampColumn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDataQualityMonitorsMonitorsList <a name="DataDatabricksDataQualityMonitorsMonitorsList" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

datadatabricksdataqualitymonitors.NewDataDatabricksDataQualityMonitorsMonitorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksDataQualityMonitorsMonitorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.get"></a>

```go
func Get(index *f64) DataDatabricksDataQualityMonitorsMonitorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDataQualityMonitorsMonitorsOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

datadatabricksdataqualitymonitors.NewDataDatabricksDataQualityMonitorsMonitorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksDataQualityMonitorsMonitorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksDataQualityMonitorsMonitorsProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfig">DataDatabricksDataQualityMonitorsMonitorsProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.anomalyDetectionConfig">AnomalyDetectionConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference">DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.dataProfilingConfig">DataProfilingConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference">DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.objectIdInput">ObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.objectTypeInput">ObjectTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.objectType">ObjectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitors">DataDatabricksDataQualityMonitorsMonitors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AnomalyDetectionConfig`<sup>Required</sup> <a name="AnomalyDetectionConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.anomalyDetectionConfig"></a>

```go
func AnomalyDetectionConfig() DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference">DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference</a>

---

##### `DataProfilingConfig`<sup>Required</sup> <a name="DataProfilingConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.dataProfilingConfig"></a>

```go
func DataProfilingConfig() DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference">DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference</a>

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.objectIdInput"></a>

```go
func ObjectIdInput() *string
```

- *Type:* *string

---

##### `ObjectTypeInput`<sup>Optional</sup> <a name="ObjectTypeInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.objectTypeInput"></a>

```go
func ObjectTypeInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.objectType"></a>

```go
func ObjectType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksDataQualityMonitorsMonitors
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitors">DataDatabricksDataQualityMonitorsMonitors</a>

---


### DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

datadatabricksdataqualitymonitors.NewDataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDataQualityMonitorsProviderConfigOutputReference <a name="DataDatabricksDataQualityMonitorsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksdataqualitymonitors"

datadatabricksdataqualitymonitors.NewDataDatabricksDataQualityMonitorsProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDataQualityMonitorsProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



