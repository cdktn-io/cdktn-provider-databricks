# `dataDatabricksDataQualityRefresh` Submodule <a name="`dataDatabricksDataQualityRefresh` Submodule" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDataQualityRefresh <a name="DataDatabricksDataQualityRefresh" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/data_quality_refresh databricks_data_quality_refresh}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdataqualityrefresh"

datadatabricksdataqualityrefresh.NewDataDatabricksDataQualityRefresh(scope Construct, id *string, config DataDatabricksDataQualityRefreshConfig) DataDatabricksDataQualityRefresh
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig">DataDatabricksDataQualityRefreshConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig">DataDatabricksDataQualityRefreshConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksDataQualityRefreshProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig">DataDatabricksDataQualityRefreshProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksDataQualityRefresh resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdataqualityrefresh"

datadatabricksdataqualityrefresh.DataDatabricksDataQualityRefresh_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdataqualityrefresh"

datadatabricksdataqualityrefresh.DataDatabricksDataQualityRefresh_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdataqualityrefresh"

datadatabricksdataqualityrefresh.DataDatabricksDataQualityRefresh_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdataqualityrefresh"

datadatabricksdataqualityrefresh.DataDatabricksDataQualityRefresh_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksDataQualityRefresh resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksDataQualityRefresh to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksDataQualityRefresh that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/data_quality_refresh#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksDataQualityRefresh to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.endTimeMs">EndTimeMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference">DataDatabricksDataQualityRefreshProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.startTimeMs">StartTimeMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.trigger">Trigger</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.objectIdInput">ObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.objectTypeInput">ObjectTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.refreshIdInput">RefreshIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.objectType">ObjectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.refreshId">RefreshId</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `EndTimeMs`<sup>Required</sup> <a name="EndTimeMs" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.endTimeMs"></a>

```go
func EndTimeMs() *f64
```

- *Type:* *f64

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksDataQualityRefreshProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference">DataDatabricksDataQualityRefreshProviderConfigOutputReference</a>

---

##### `StartTimeMs`<sup>Required</sup> <a name="StartTimeMs" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.startTimeMs"></a>

```go
func StartTimeMs() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.trigger"></a>

```go
func Trigger() *string
```

- *Type:* *string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.objectIdInput"></a>

```go
func ObjectIdInput() *string
```

- *Type:* *string

---

##### `ObjectTypeInput`<sup>Optional</sup> <a name="ObjectTypeInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.objectTypeInput"></a>

```go
func ObjectTypeInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `RefreshIdInput`<sup>Optional</sup> <a name="RefreshIdInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.refreshIdInput"></a>

```go
func RefreshIdInput() *f64
```

- *Type:* *f64

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.objectType"></a>

```go
func ObjectType() *string
```

- *Type:* *string

---

##### `RefreshId`<sup>Required</sup> <a name="RefreshId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.refreshId"></a>

```go
func RefreshId() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDataQualityRefreshConfig <a name="DataDatabricksDataQualityRefreshConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdataqualityrefresh"

&datadatabricksdataqualityrefresh.DataDatabricksDataQualityRefreshConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ObjectId: *string,
	ObjectType: *string,
	RefreshId: *f64,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.objectId">ObjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/data_quality_refresh#object_id DataDatabricksDataQualityRefresh#object_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.objectType">ObjectType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/data_quality_refresh#object_type DataDatabricksDataQualityRefresh#object_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.refreshId">RefreshId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/data_quality_refresh#refresh_id DataDatabricksDataQualityRefresh#refresh_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig">DataDatabricksDataQualityRefreshProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/data_quality_refresh#provider_config DataDatabricksDataQualityRefresh#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.objectId"></a>

```go
ObjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/data_quality_refresh#object_id DataDatabricksDataQualityRefresh#object_id}.

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.objectType"></a>

```go
ObjectType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/data_quality_refresh#object_type DataDatabricksDataQualityRefresh#object_type}.

---

##### `RefreshId`<sup>Required</sup> <a name="RefreshId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.refreshId"></a>

```go
RefreshId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/data_quality_refresh#refresh_id DataDatabricksDataQualityRefresh#refresh_id}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksDataQualityRefreshProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig">DataDatabricksDataQualityRefreshProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/data_quality_refresh#provider_config DataDatabricksDataQualityRefresh#provider_config}.

---

### DataDatabricksDataQualityRefreshProviderConfig <a name="DataDatabricksDataQualityRefreshProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdataqualityrefresh"

&datadatabricksdataqualityrefresh.DataDatabricksDataQualityRefreshProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/data_quality_refresh#workspace_id DataDatabricksDataQualityRefresh#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/data_quality_refresh#workspace_id DataDatabricksDataQualityRefresh#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDataQualityRefreshProviderConfigOutputReference <a name="DataDatabricksDataQualityRefreshProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdataqualityrefresh"

datadatabricksdataqualityrefresh.NewDataDatabricksDataQualityRefreshProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDataQualityRefreshProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



