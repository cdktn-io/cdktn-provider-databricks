# `dataDatabricksSparkVersion` Submodule <a name="`dataDatabricksSparkVersion` Submodule" id="@cdktn/provider-databricks.dataDatabricksSparkVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksSparkVersion <a name="DataDatabricksSparkVersion" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/spark_version databricks_spark_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickssparkversion"

datadatabrickssparkversion.NewDataDatabricksSparkVersion(scope Construct, id *string, config DataDatabricksSparkVersionConfig) DataDatabricksSparkVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig">DataDatabricksSparkVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig">DataDatabricksSparkVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetBeta">ResetBeta</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetGenomics">ResetGenomics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetGpu">ResetGpu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetGraviton">ResetGraviton</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetLatest">ResetLatest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetLongTermSupport">ResetLongTermSupport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetMl">ResetMl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetPhoton">ResetPhoton</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetScala">ResetScala</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetSparkVersion">ResetSparkVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksSparkVersionProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfig">DataDatabricksSparkVersionProviderConfig</a>

---

##### `ResetBeta` <a name="ResetBeta" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetBeta"></a>

```go
func ResetBeta()
```

##### `ResetGenomics` <a name="ResetGenomics" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetGenomics"></a>

```go
func ResetGenomics()
```

##### `ResetGpu` <a name="ResetGpu" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetGpu"></a>

```go
func ResetGpu()
```

##### `ResetGraviton` <a name="ResetGraviton" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetGraviton"></a>

```go
func ResetGraviton()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetId"></a>

```go
func ResetId()
```

##### `ResetLatest` <a name="ResetLatest" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetLatest"></a>

```go
func ResetLatest()
```

##### `ResetLongTermSupport` <a name="ResetLongTermSupport" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetLongTermSupport"></a>

```go
func ResetLongTermSupport()
```

##### `ResetMl` <a name="ResetMl" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetMl"></a>

```go
func ResetMl()
```

##### `ResetPhoton` <a name="ResetPhoton" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetPhoton"></a>

```go
func ResetPhoton()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetScala` <a name="ResetScala" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetScala"></a>

```go
func ResetScala()
```

##### `ResetSparkVersion` <a name="ResetSparkVersion" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetSparkVersion"></a>

```go
func ResetSparkVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksSparkVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickssparkversion"

datadatabrickssparkversion.DataDatabricksSparkVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickssparkversion"

datadatabrickssparkversion.DataDatabricksSparkVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickssparkversion"

datadatabrickssparkversion.DataDatabricksSparkVersion_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickssparkversion"

datadatabrickssparkversion.DataDatabricksSparkVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksSparkVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksSparkVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksSparkVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/spark_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksSparkVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference">DataDatabricksSparkVersionProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.betaInput">BetaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.genomicsInput">GenomicsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.gpuInput">GpuInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.gravitonInput">GravitonInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.latestInput">LatestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.longTermSupportInput">LongTermSupportInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.mlInput">MlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.photonInput">PhotonInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfig">DataDatabricksSparkVersionProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.scalaInput">ScalaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.sparkVersionInput">SparkVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.beta">Beta</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.genomics">Genomics</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.gpu">Gpu</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.graviton">Graviton</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.latest">Latest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.longTermSupport">LongTermSupport</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.ml">Ml</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.photon">Photon</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.scala">Scala</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.sparkVersion">SparkVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksSparkVersionProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference">DataDatabricksSparkVersionProviderConfigOutputReference</a>

---

##### `BetaInput`<sup>Optional</sup> <a name="BetaInput" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.betaInput"></a>

```go
func BetaInput() interface{}
```

- *Type:* interface{}

---

##### `GenomicsInput`<sup>Optional</sup> <a name="GenomicsInput" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.genomicsInput"></a>

```go
func GenomicsInput() interface{}
```

- *Type:* interface{}

---

##### `GpuInput`<sup>Optional</sup> <a name="GpuInput" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.gpuInput"></a>

```go
func GpuInput() interface{}
```

- *Type:* interface{}

---

##### `GravitonInput`<sup>Optional</sup> <a name="GravitonInput" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.gravitonInput"></a>

```go
func GravitonInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LatestInput`<sup>Optional</sup> <a name="LatestInput" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.latestInput"></a>

```go
func LatestInput() interface{}
```

- *Type:* interface{}

---

##### `LongTermSupportInput`<sup>Optional</sup> <a name="LongTermSupportInput" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.longTermSupportInput"></a>

```go
func LongTermSupportInput() interface{}
```

- *Type:* interface{}

---

##### `MlInput`<sup>Optional</sup> <a name="MlInput" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.mlInput"></a>

```go
func MlInput() interface{}
```

- *Type:* interface{}

---

##### `PhotonInput`<sup>Optional</sup> <a name="PhotonInput" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.photonInput"></a>

```go
func PhotonInput() interface{}
```

- *Type:* interface{}

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.providerConfigInput"></a>

```go
func ProviderConfigInput() DataDatabricksSparkVersionProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfig">DataDatabricksSparkVersionProviderConfig</a>

---

##### `ScalaInput`<sup>Optional</sup> <a name="ScalaInput" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.scalaInput"></a>

```go
func ScalaInput() *string
```

- *Type:* *string

---

##### `SparkVersionInput`<sup>Optional</sup> <a name="SparkVersionInput" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.sparkVersionInput"></a>

```go
func SparkVersionInput() *string
```

- *Type:* *string

---

##### `Beta`<sup>Required</sup> <a name="Beta" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.beta"></a>

```go
func Beta() interface{}
```

- *Type:* interface{}

---

##### `Genomics`<sup>Required</sup> <a name="Genomics" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.genomics"></a>

```go
func Genomics() interface{}
```

- *Type:* interface{}

---

##### `Gpu`<sup>Required</sup> <a name="Gpu" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.gpu"></a>

```go
func Gpu() interface{}
```

- *Type:* interface{}

---

##### `Graviton`<sup>Required</sup> <a name="Graviton" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.graviton"></a>

```go
func Graviton() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Latest`<sup>Required</sup> <a name="Latest" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.latest"></a>

```go
func Latest() interface{}
```

- *Type:* interface{}

---

##### `LongTermSupport`<sup>Required</sup> <a name="LongTermSupport" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.longTermSupport"></a>

```go
func LongTermSupport() interface{}
```

- *Type:* interface{}

---

##### `Ml`<sup>Required</sup> <a name="Ml" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.ml"></a>

```go
func Ml() interface{}
```

- *Type:* interface{}

---

##### `Photon`<sup>Required</sup> <a name="Photon" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.photon"></a>

```go
func Photon() interface{}
```

- *Type:* interface{}

---

##### `Scala`<sup>Required</sup> <a name="Scala" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.scala"></a>

```go
func Scala() *string
```

- *Type:* *string

---

##### `SparkVersion`<sup>Required</sup> <a name="SparkVersion" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.sparkVersion"></a>

```go
func SparkVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksSparkVersionConfig <a name="DataDatabricksSparkVersionConfig" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickssparkversion"

&datadatabrickssparkversion.DataDatabricksSparkVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Beta: interface{},
	Genomics: interface{},
	Gpu: interface{},
	Graviton: interface{},
	Id: *string,
	Latest: interface{},
	LongTermSupport: interface{},
	Ml: interface{},
	Photon: interface{},
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfig,
	Scala: *string,
	SparkVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.beta">Beta</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/spark_version#beta DataDatabricksSparkVersion#beta}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.genomics">Genomics</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/spark_version#genomics DataDatabricksSparkVersion#genomics}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.gpu">Gpu</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/spark_version#gpu DataDatabricksSparkVersion#gpu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.graviton">Graviton</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/spark_version#graviton DataDatabricksSparkVersion#graviton}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/spark_version#id DataDatabricksSparkVersion#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.latest">Latest</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/spark_version#latest DataDatabricksSparkVersion#latest}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.longTermSupport">LongTermSupport</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/spark_version#long_term_support DataDatabricksSparkVersion#long_term_support}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.ml">Ml</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/spark_version#ml DataDatabricksSparkVersion#ml}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.photon">Photon</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/spark_version#photon DataDatabricksSparkVersion#photon}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfig">DataDatabricksSparkVersionProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.scala">Scala</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/spark_version#scala DataDatabricksSparkVersion#scala}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.sparkVersion">SparkVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/spark_version#spark_version DataDatabricksSparkVersion#spark_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Beta`<sup>Optional</sup> <a name="Beta" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.beta"></a>

```go
Beta interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/spark_version#beta DataDatabricksSparkVersion#beta}.

---

##### `Genomics`<sup>Optional</sup> <a name="Genomics" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.genomics"></a>

```go
Genomics interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/spark_version#genomics DataDatabricksSparkVersion#genomics}.

---

##### `Gpu`<sup>Optional</sup> <a name="Gpu" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.gpu"></a>

```go
Gpu interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/spark_version#gpu DataDatabricksSparkVersion#gpu}.

---

##### `Graviton`<sup>Optional</sup> <a name="Graviton" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.graviton"></a>

```go
Graviton interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/spark_version#graviton DataDatabricksSparkVersion#graviton}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/spark_version#id DataDatabricksSparkVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Latest`<sup>Optional</sup> <a name="Latest" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.latest"></a>

```go
Latest interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/spark_version#latest DataDatabricksSparkVersion#latest}.

---

##### `LongTermSupport`<sup>Optional</sup> <a name="LongTermSupport" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.longTermSupport"></a>

```go
LongTermSupport interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/spark_version#long_term_support DataDatabricksSparkVersion#long_term_support}.

---

##### `Ml`<sup>Optional</sup> <a name="Ml" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.ml"></a>

```go
Ml interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/spark_version#ml DataDatabricksSparkVersion#ml}.

---

##### `Photon`<sup>Optional</sup> <a name="Photon" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.photon"></a>

```go
Photon interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/spark_version#photon DataDatabricksSparkVersion#photon}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksSparkVersionProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfig">DataDatabricksSparkVersionProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/spark_version#provider_config DataDatabricksSparkVersion#provider_config}

---

##### `Scala`<sup>Optional</sup> <a name="Scala" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.scala"></a>

```go
Scala *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/spark_version#scala DataDatabricksSparkVersion#scala}.

---

##### `SparkVersion`<sup>Optional</sup> <a name="SparkVersion" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.sparkVersion"></a>

```go
SparkVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/spark_version#spark_version DataDatabricksSparkVersion#spark_version}.

---

### DataDatabricksSparkVersionProviderConfig <a name="DataDatabricksSparkVersionProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickssparkversion"

&datadatabrickssparkversion.DataDatabricksSparkVersionProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/spark_version#workspace_id DataDatabricksSparkVersion#workspace_id}. |

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/spark_version#workspace_id DataDatabricksSparkVersion#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksSparkVersionProviderConfigOutputReference <a name="DataDatabricksSparkVersionProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickssparkversion"

datadatabrickssparkversion.NewDataDatabricksSparkVersionProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksSparkVersionProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfig">DataDatabricksSparkVersionProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksSparkVersionProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfig">DataDatabricksSparkVersionProviderConfig</a>

---



