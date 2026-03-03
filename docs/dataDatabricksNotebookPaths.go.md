# `dataDatabricksNotebookPaths` Submodule <a name="`dataDatabricksNotebookPaths` Submodule" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksNotebookPaths <a name="DataDatabricksNotebookPaths" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/notebook_paths databricks_notebook_paths}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksnotebookpaths"

datadatabricksnotebookpaths.NewDataDatabricksNotebookPaths(scope Construct, id *string, config DataDatabricksNotebookPathsConfig) DataDatabricksNotebookPaths
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig">DataDatabricksNotebookPathsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig">DataDatabricksNotebookPathsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksNotebookPathsProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfig">DataDatabricksNotebookPathsProviderConfig</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.resetId"></a>

```go
func ResetId()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksNotebookPaths resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksnotebookpaths"

datadatabricksnotebookpaths.DataDatabricksNotebookPaths_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksnotebookpaths"

datadatabricksnotebookpaths.DataDatabricksNotebookPaths_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksnotebookpaths"

datadatabricksnotebookpaths.DataDatabricksNotebookPaths_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksnotebookpaths"

datadatabricksnotebookpaths.DataDatabricksNotebookPaths_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksNotebookPaths resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksNotebookPaths to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksNotebookPaths that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/notebook_paths#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksNotebookPaths to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.notebookPathList">NotebookPathList</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList">DataDatabricksNotebookPathsNotebookPathListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference">DataDatabricksNotebookPathsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfig">DataDatabricksNotebookPathsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.recursiveInput">RecursiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.recursive">Recursive</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `NotebookPathList`<sup>Required</sup> <a name="NotebookPathList" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.notebookPathList"></a>

```go
func NotebookPathList() DataDatabricksNotebookPathsNotebookPathListStructList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList">DataDatabricksNotebookPathsNotebookPathListStructList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksNotebookPathsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference">DataDatabricksNotebookPathsProviderConfigOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.providerConfigInput"></a>

```go
func ProviderConfigInput() DataDatabricksNotebookPathsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfig">DataDatabricksNotebookPathsProviderConfig</a>

---

##### `RecursiveInput`<sup>Optional</sup> <a name="RecursiveInput" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.recursiveInput"></a>

```go
func RecursiveInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Recursive`<sup>Required</sup> <a name="Recursive" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.recursive"></a>

```go
func Recursive() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksNotebookPathsConfig <a name="DataDatabricksNotebookPathsConfig" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksnotebookpaths"

&datadatabricksnotebookpaths.DataDatabricksNotebookPathsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Path: *string,
	Recursive: interface{},
	Id: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/notebook_paths#path DataDatabricksNotebookPaths#path}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.recursive">Recursive</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/notebook_paths#recursive DataDatabricksNotebookPaths#recursive}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/notebook_paths#id DataDatabricksNotebookPaths#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfig">DataDatabricksNotebookPathsProviderConfig</a></code> | provider_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/notebook_paths#path DataDatabricksNotebookPaths#path}.

---

##### `Recursive`<sup>Required</sup> <a name="Recursive" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.recursive"></a>

```go
Recursive interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/notebook_paths#recursive DataDatabricksNotebookPaths#recursive}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/notebook_paths#id DataDatabricksNotebookPaths#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksNotebookPathsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfig">DataDatabricksNotebookPathsProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/notebook_paths#provider_config DataDatabricksNotebookPaths#provider_config}

---

### DataDatabricksNotebookPathsNotebookPathListStruct <a name="DataDatabricksNotebookPathsNotebookPathListStruct" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksnotebookpaths"

&datadatabricksnotebookpaths.DataDatabricksNotebookPathsNotebookPathListStruct {

}
```


### DataDatabricksNotebookPathsProviderConfig <a name="DataDatabricksNotebookPathsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksnotebookpaths"

&datadatabricksnotebookpaths.DataDatabricksNotebookPathsProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/notebook_paths#workspace_id DataDatabricksNotebookPaths#workspace_id}. |

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/notebook_paths#workspace_id DataDatabricksNotebookPaths#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksNotebookPathsNotebookPathListStructList <a name="DataDatabricksNotebookPathsNotebookPathListStructList" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksnotebookpaths"

datadatabricksnotebookpaths.NewDataDatabricksNotebookPathsNotebookPathListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksNotebookPathsNotebookPathListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.get"></a>

```go
func Get(index *f64) DataDatabricksNotebookPathsNotebookPathListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDatabricksNotebookPathsNotebookPathListStructOutputReference <a name="DataDatabricksNotebookPathsNotebookPathListStructOutputReference" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksnotebookpaths"

datadatabricksnotebookpaths.NewDataDatabricksNotebookPathsNotebookPathListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksNotebookPathsNotebookPathListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.property.language">Language</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStruct">DataDatabricksNotebookPathsNotebookPathListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.property.language"></a>

```go
func Language() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksNotebookPathsNotebookPathListStruct
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStruct">DataDatabricksNotebookPathsNotebookPathListStruct</a>

---


### DataDatabricksNotebookPathsProviderConfigOutputReference <a name="DataDatabricksNotebookPathsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksnotebookpaths"

datadatabricksnotebookpaths.NewDataDatabricksNotebookPathsProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksNotebookPathsProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfig">DataDatabricksNotebookPathsProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksNotebookPathsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsProviderConfig">DataDatabricksNotebookPathsProviderConfig</a>

---



