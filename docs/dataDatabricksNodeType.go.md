# `dataDatabricksNodeType` Submodule <a name="`dataDatabricksNodeType` Submodule" id="@cdktn/provider-databricks.dataDatabricksNodeType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksNodeType <a name="DataDatabricksNodeType" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type databricks_node_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksnodetype"

datadatabricksnodetype.NewDataDatabricksNodeType(scope Construct, id *string, config DataDatabricksNodeTypeConfig) DataDatabricksNodeType
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig">DataDatabricksNodeTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig">DataDatabricksNodeTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetArm">ResetArm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetCategory">ResetCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetFleet">ResetFleet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetGbPerCore">ResetGbPerCore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetGraviton">ResetGraviton</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetIsIoCacheEnabled">ResetIsIoCacheEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetLocalDisk">ResetLocalDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetLocalDiskMinSize">ResetLocalDiskMinSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetMinCores">ResetMinCores</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetMinGpus">ResetMinGpus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetMinMemoryGb">ResetMinMemoryGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetPhotonDriverCapable">ResetPhotonDriverCapable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetPhotonWorkerCapable">ResetPhotonWorkerCapable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetSupportPortForwarding">ResetSupportPortForwarding</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksNodeTypeProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfig">DataDatabricksNodeTypeProviderConfig</a>

---

##### `ResetArm` <a name="ResetArm" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetArm"></a>

```go
func ResetArm()
```

##### `ResetCategory` <a name="ResetCategory" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetCategory"></a>

```go
func ResetCategory()
```

##### `ResetFleet` <a name="ResetFleet" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetFleet"></a>

```go
func ResetFleet()
```

##### `ResetGbPerCore` <a name="ResetGbPerCore" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetGbPerCore"></a>

```go
func ResetGbPerCore()
```

##### `ResetGraviton` <a name="ResetGraviton" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetGraviton"></a>

```go
func ResetGraviton()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetId"></a>

```go
func ResetId()
```

##### `ResetIsIoCacheEnabled` <a name="ResetIsIoCacheEnabled" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetIsIoCacheEnabled"></a>

```go
func ResetIsIoCacheEnabled()
```

##### `ResetLocalDisk` <a name="ResetLocalDisk" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetLocalDisk"></a>

```go
func ResetLocalDisk()
```

##### `ResetLocalDiskMinSize` <a name="ResetLocalDiskMinSize" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetLocalDiskMinSize"></a>

```go
func ResetLocalDiskMinSize()
```

##### `ResetMinCores` <a name="ResetMinCores" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetMinCores"></a>

```go
func ResetMinCores()
```

##### `ResetMinGpus` <a name="ResetMinGpus" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetMinGpus"></a>

```go
func ResetMinGpus()
```

##### `ResetMinMemoryGb` <a name="ResetMinMemoryGb" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetMinMemoryGb"></a>

```go
func ResetMinMemoryGb()
```

##### `ResetPhotonDriverCapable` <a name="ResetPhotonDriverCapable" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetPhotonDriverCapable"></a>

```go
func ResetPhotonDriverCapable()
```

##### `ResetPhotonWorkerCapable` <a name="ResetPhotonWorkerCapable" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetPhotonWorkerCapable"></a>

```go
func ResetPhotonWorkerCapable()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetSupportPortForwarding` <a name="ResetSupportPortForwarding" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetSupportPortForwarding"></a>

```go
func ResetSupportPortForwarding()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksNodeType resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksnodetype"

datadatabricksnodetype.DataDatabricksNodeType_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksnodetype"

datadatabricksnodetype.DataDatabricksNodeType_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksnodetype"

datadatabricksnodetype.DataDatabricksNodeType_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksnodetype"

datadatabricksnodetype.DataDatabricksNodeType_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksNodeType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksNodeType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksNodeType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksNodeType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference">DataDatabricksNodeTypeProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.armInput">ArmInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.fleetInput">FleetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.gbPerCoreInput">GbPerCoreInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.gravitonInput">GravitonInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.isIoCacheEnabledInput">IsIoCacheEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.localDiskInput">LocalDiskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.localDiskMinSizeInput">LocalDiskMinSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minCoresInput">MinCoresInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minGpusInput">MinGpusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minMemoryGbInput">MinMemoryGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.photonDriverCapableInput">PhotonDriverCapableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.photonWorkerCapableInput">PhotonWorkerCapableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfig">DataDatabricksNodeTypeProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.supportPortForwardingInput">SupportPortForwardingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.arm">Arm</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.fleet">Fleet</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.gbPerCore">GbPerCore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.graviton">Graviton</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.isIoCacheEnabled">IsIoCacheEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.localDisk">LocalDisk</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.localDiskMinSize">LocalDiskMinSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minCores">MinCores</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minGpus">MinGpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minMemoryGb">MinMemoryGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.photonDriverCapable">PhotonDriverCapable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.photonWorkerCapable">PhotonWorkerCapable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.supportPortForwarding">SupportPortForwarding</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksNodeTypeProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference">DataDatabricksNodeTypeProviderConfigOutputReference</a>

---

##### `ArmInput`<sup>Optional</sup> <a name="ArmInput" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.armInput"></a>

```go
func ArmInput() interface{}
```

- *Type:* interface{}

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `FleetInput`<sup>Optional</sup> <a name="FleetInput" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.fleetInput"></a>

```go
func FleetInput() interface{}
```

- *Type:* interface{}

---

##### `GbPerCoreInput`<sup>Optional</sup> <a name="GbPerCoreInput" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.gbPerCoreInput"></a>

```go
func GbPerCoreInput() *f64
```

- *Type:* *f64

---

##### `GravitonInput`<sup>Optional</sup> <a name="GravitonInput" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.gravitonInput"></a>

```go
func GravitonInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsIoCacheEnabledInput`<sup>Optional</sup> <a name="IsIoCacheEnabledInput" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.isIoCacheEnabledInput"></a>

```go
func IsIoCacheEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LocalDiskInput`<sup>Optional</sup> <a name="LocalDiskInput" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.localDiskInput"></a>

```go
func LocalDiskInput() interface{}
```

- *Type:* interface{}

---

##### `LocalDiskMinSizeInput`<sup>Optional</sup> <a name="LocalDiskMinSizeInput" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.localDiskMinSizeInput"></a>

```go
func LocalDiskMinSizeInput() *f64
```

- *Type:* *f64

---

##### `MinCoresInput`<sup>Optional</sup> <a name="MinCoresInput" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minCoresInput"></a>

```go
func MinCoresInput() *f64
```

- *Type:* *f64

---

##### `MinGpusInput`<sup>Optional</sup> <a name="MinGpusInput" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minGpusInput"></a>

```go
func MinGpusInput() *f64
```

- *Type:* *f64

---

##### `MinMemoryGbInput`<sup>Optional</sup> <a name="MinMemoryGbInput" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minMemoryGbInput"></a>

```go
func MinMemoryGbInput() *f64
```

- *Type:* *f64

---

##### `PhotonDriverCapableInput`<sup>Optional</sup> <a name="PhotonDriverCapableInput" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.photonDriverCapableInput"></a>

```go
func PhotonDriverCapableInput() interface{}
```

- *Type:* interface{}

---

##### `PhotonWorkerCapableInput`<sup>Optional</sup> <a name="PhotonWorkerCapableInput" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.photonWorkerCapableInput"></a>

```go
func PhotonWorkerCapableInput() interface{}
```

- *Type:* interface{}

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.providerConfigInput"></a>

```go
func ProviderConfigInput() DataDatabricksNodeTypeProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfig">DataDatabricksNodeTypeProviderConfig</a>

---

##### `SupportPortForwardingInput`<sup>Optional</sup> <a name="SupportPortForwardingInput" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.supportPortForwardingInput"></a>

```go
func SupportPortForwardingInput() interface{}
```

- *Type:* interface{}

---

##### `Arm`<sup>Required</sup> <a name="Arm" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.arm"></a>

```go
func Arm() interface{}
```

- *Type:* interface{}

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Fleet`<sup>Required</sup> <a name="Fleet" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.fleet"></a>

```go
func Fleet() interface{}
```

- *Type:* interface{}

---

##### `GbPerCore`<sup>Required</sup> <a name="GbPerCore" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.gbPerCore"></a>

```go
func GbPerCore() *f64
```

- *Type:* *f64

---

##### `Graviton`<sup>Required</sup> <a name="Graviton" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.graviton"></a>

```go
func Graviton() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsIoCacheEnabled`<sup>Required</sup> <a name="IsIoCacheEnabled" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.isIoCacheEnabled"></a>

```go
func IsIoCacheEnabled() interface{}
```

- *Type:* interface{}

---

##### `LocalDisk`<sup>Required</sup> <a name="LocalDisk" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.localDisk"></a>

```go
func LocalDisk() interface{}
```

- *Type:* interface{}

---

##### `LocalDiskMinSize`<sup>Required</sup> <a name="LocalDiskMinSize" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.localDiskMinSize"></a>

```go
func LocalDiskMinSize() *f64
```

- *Type:* *f64

---

##### `MinCores`<sup>Required</sup> <a name="MinCores" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minCores"></a>

```go
func MinCores() *f64
```

- *Type:* *f64

---

##### `MinGpus`<sup>Required</sup> <a name="MinGpus" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minGpus"></a>

```go
func MinGpus() *f64
```

- *Type:* *f64

---

##### `MinMemoryGb`<sup>Required</sup> <a name="MinMemoryGb" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minMemoryGb"></a>

```go
func MinMemoryGb() *f64
```

- *Type:* *f64

---

##### `PhotonDriverCapable`<sup>Required</sup> <a name="PhotonDriverCapable" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.photonDriverCapable"></a>

```go
func PhotonDriverCapable() interface{}
```

- *Type:* interface{}

---

##### `PhotonWorkerCapable`<sup>Required</sup> <a name="PhotonWorkerCapable" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.photonWorkerCapable"></a>

```go
func PhotonWorkerCapable() interface{}
```

- *Type:* interface{}

---

##### `SupportPortForwarding`<sup>Required</sup> <a name="SupportPortForwarding" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.supportPortForwarding"></a>

```go
func SupportPortForwarding() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksNodeTypeConfig <a name="DataDatabricksNodeTypeConfig" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksnodetype"

&datadatabricksnodetype.DataDatabricksNodeTypeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Arm: interface{},
	Category: *string,
	Fleet: interface{},
	GbPerCore: *f64,
	Graviton: interface{},
	Id: *string,
	IsIoCacheEnabled: interface{},
	LocalDisk: interface{},
	LocalDiskMinSize: *f64,
	MinCores: *f64,
	MinGpus: *f64,
	MinMemoryGb: *f64,
	PhotonDriverCapable: interface{},
	PhotonWorkerCapable: interface{},
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfig,
	SupportPortForwarding: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.arm">Arm</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#arm DataDatabricksNodeType#arm}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.category">Category</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#category DataDatabricksNodeType#category}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.fleet">Fleet</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#fleet DataDatabricksNodeType#fleet}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.gbPerCore">GbPerCore</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#gb_per_core DataDatabricksNodeType#gb_per_core}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.graviton">Graviton</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#graviton DataDatabricksNodeType#graviton}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#id DataDatabricksNodeType#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.isIoCacheEnabled">IsIoCacheEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#is_io_cache_enabled DataDatabricksNodeType#is_io_cache_enabled}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.localDisk">LocalDisk</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#local_disk DataDatabricksNodeType#local_disk}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.localDiskMinSize">LocalDiskMinSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#local_disk_min_size DataDatabricksNodeType#local_disk_min_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.minCores">MinCores</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#min_cores DataDatabricksNodeType#min_cores}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.minGpus">MinGpus</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#min_gpus DataDatabricksNodeType#min_gpus}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.minMemoryGb">MinMemoryGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#min_memory_gb DataDatabricksNodeType#min_memory_gb}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.photonDriverCapable">PhotonDriverCapable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#photon_driver_capable DataDatabricksNodeType#photon_driver_capable}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.photonWorkerCapable">PhotonWorkerCapable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#photon_worker_capable DataDatabricksNodeType#photon_worker_capable}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfig">DataDatabricksNodeTypeProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.supportPortForwarding">SupportPortForwarding</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#support_port_forwarding DataDatabricksNodeType#support_port_forwarding}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arm`<sup>Optional</sup> <a name="Arm" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.arm"></a>

```go
Arm interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#arm DataDatabricksNodeType#arm}.

---

##### `Category`<sup>Optional</sup> <a name="Category" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.category"></a>

```go
Category *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#category DataDatabricksNodeType#category}.

---

##### `Fleet`<sup>Optional</sup> <a name="Fleet" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.fleet"></a>

```go
Fleet interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#fleet DataDatabricksNodeType#fleet}.

---

##### `GbPerCore`<sup>Optional</sup> <a name="GbPerCore" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.gbPerCore"></a>

```go
GbPerCore *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#gb_per_core DataDatabricksNodeType#gb_per_core}.

---

##### `Graviton`<sup>Optional</sup> <a name="Graviton" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.graviton"></a>

```go
Graviton interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#graviton DataDatabricksNodeType#graviton}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#id DataDatabricksNodeType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsIoCacheEnabled`<sup>Optional</sup> <a name="IsIoCacheEnabled" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.isIoCacheEnabled"></a>

```go
IsIoCacheEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#is_io_cache_enabled DataDatabricksNodeType#is_io_cache_enabled}.

---

##### `LocalDisk`<sup>Optional</sup> <a name="LocalDisk" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.localDisk"></a>

```go
LocalDisk interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#local_disk DataDatabricksNodeType#local_disk}.

---

##### `LocalDiskMinSize`<sup>Optional</sup> <a name="LocalDiskMinSize" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.localDiskMinSize"></a>

```go
LocalDiskMinSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#local_disk_min_size DataDatabricksNodeType#local_disk_min_size}.

---

##### `MinCores`<sup>Optional</sup> <a name="MinCores" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.minCores"></a>

```go
MinCores *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#min_cores DataDatabricksNodeType#min_cores}.

---

##### `MinGpus`<sup>Optional</sup> <a name="MinGpus" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.minGpus"></a>

```go
MinGpus *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#min_gpus DataDatabricksNodeType#min_gpus}.

---

##### `MinMemoryGb`<sup>Optional</sup> <a name="MinMemoryGb" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.minMemoryGb"></a>

```go
MinMemoryGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#min_memory_gb DataDatabricksNodeType#min_memory_gb}.

---

##### `PhotonDriverCapable`<sup>Optional</sup> <a name="PhotonDriverCapable" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.photonDriverCapable"></a>

```go
PhotonDriverCapable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#photon_driver_capable DataDatabricksNodeType#photon_driver_capable}.

---

##### `PhotonWorkerCapable`<sup>Optional</sup> <a name="PhotonWorkerCapable" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.photonWorkerCapable"></a>

```go
PhotonWorkerCapable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#photon_worker_capable DataDatabricksNodeType#photon_worker_capable}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksNodeTypeProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfig">DataDatabricksNodeTypeProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#provider_config DataDatabricksNodeType#provider_config}

---

##### `SupportPortForwarding`<sup>Optional</sup> <a name="SupportPortForwarding" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.supportPortForwarding"></a>

```go
SupportPortForwarding interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#support_port_forwarding DataDatabricksNodeType#support_port_forwarding}.

---

### DataDatabricksNodeTypeProviderConfig <a name="DataDatabricksNodeTypeProviderConfig" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksnodetype"

&datadatabricksnodetype.DataDatabricksNodeTypeProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#workspace_id DataDatabricksNodeType#workspace_id}. |

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/node_type#workspace_id DataDatabricksNodeType#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksNodeTypeProviderConfigOutputReference <a name="DataDatabricksNodeTypeProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksnodetype"

datadatabricksnodetype.NewDataDatabricksNodeTypeProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksNodeTypeProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfig">DataDatabricksNodeTypeProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksNodeTypeProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeProviderConfig">DataDatabricksNodeTypeProviderConfig</a>

---



