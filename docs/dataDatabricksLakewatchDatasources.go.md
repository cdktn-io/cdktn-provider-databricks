# `dataDatabricksLakewatchDatasources` Submodule <a name="`dataDatabricksLakewatchDatasources` Submodule" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksLakewatchDatasources <a name="DataDatabricksLakewatchDatasources" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources databricks_lakewatch_datasources}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

datadatabrickslakewatchdatasources.NewDataDatabricksLakewatchDatasources(scope Construct, id *string, config DataDatabricksLakewatchDatasourcesConfig) DataDatabricksLakewatchDatasources
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig">DataDatabricksLakewatchDatasourcesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig">DataDatabricksLakewatchDatasourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetSchemaName">ResetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetView">ResetView</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksLakewatchDatasourcesProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesProviderConfig</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetPageSize"></a>

```go
func ResetPageSize()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetSchemaName"></a>

```go
func ResetSchemaName()
```

##### `ResetView` <a name="ResetView" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetView"></a>

```go
func ResetView()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksLakewatchDatasources resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

datadatabrickslakewatchdatasources.DataDatabricksLakewatchDatasources_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

datadatabrickslakewatchdatasources.DataDatabricksLakewatchDatasources_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

datadatabrickslakewatchdatasources.DataDatabricksLakewatchDatasources_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

datadatabrickslakewatchdatasources.DataDatabricksLakewatchDatasources_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksLakewatchDatasources resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksLakewatchDatasources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksLakewatchDatasources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksLakewatchDatasources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.datasources">Datasources</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList">DataDatabricksLakewatchDatasourcesDatasourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference">DataDatabricksLakewatchDatasourcesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.catalogNameInput">CatalogNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.pageSizeInput">PageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.viewInput">ViewInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.pageSize">PageSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.view">View</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Datasources`<sup>Required</sup> <a name="Datasources" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.datasources"></a>

```go
func Datasources() DataDatabricksLakewatchDatasourcesDatasourcesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList">DataDatabricksLakewatchDatasourcesDatasourcesList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksLakewatchDatasourcesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference">DataDatabricksLakewatchDatasourcesProviderConfigOutputReference</a>

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.catalogNameInput"></a>

```go
func CatalogNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.pageSizeInput"></a>

```go
func PageSizeInput() *f64
```

- *Type:* *f64

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `ViewInput`<sup>Optional</sup> <a name="ViewInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.viewInput"></a>

```go
func ViewInput() *string
```

- *Type:* *string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.pageSize"></a>

```go
func PageSize() *f64
```

- *Type:* *f64

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `View`<sup>Required</sup> <a name="View" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.view"></a>

```go
func View() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksLakewatchDatasourcesConfig <a name="DataDatabricksLakewatchDatasourcesConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

&datadatabrickslakewatchdatasources.DataDatabricksLakewatchDatasourcesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CatalogName: *string,
	Filter: *string,
	PageSize: *f64,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig,
	SchemaName: *string,
	View: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.catalogName">CatalogName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.filter">Filter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#filter DataDatabricksLakewatchDatasources#filter}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.pageSize">PageSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#page_size DataDatabricksLakewatchDatasources#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#provider_config DataDatabricksLakewatchDatasources#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.schemaName">SchemaName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.view">View</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#view DataDatabricksLakewatchDatasources#view}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.catalogName"></a>

```go
CatalogName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#filter DataDatabricksLakewatchDatasources#filter}.

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.pageSize"></a>

```go
PageSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#page_size DataDatabricksLakewatchDatasources#page_size}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksLakewatchDatasourcesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#provider_config DataDatabricksLakewatchDatasources#provider_config}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}.

---

##### `View`<sup>Optional</sup> <a name="View" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.view"></a>

```go
View *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#view DataDatabricksLakewatchDatasources#view}.

---

### DataDatabricksLakewatchDatasourcesDatasources <a name="DataDatabricksLakewatchDatasourcesDatasources" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

&datadatabrickslakewatchdatasources.DataDatabricksLakewatchDatasourcesDatasources {
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#name DataDatabricksLakewatchDatasources#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#provider_config DataDatabricksLakewatchDatasources#provider_config}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#name DataDatabricksLakewatchDatasources#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#provider_config DataDatabricksLakewatchDatasources#provider_config}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesAutoloader <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloader" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

&datadatabrickslakewatchdatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader {
	Format: *string,
	Location: *string,
	RawTable: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable,
	AwsSecretScope: *string,
	Envelope: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope,
	FormatOptions: *map[string]*string,
	IncludeExistingFiles: interface{},
	OverridePartitionColumns: *[]*string,
	QueueUrl: *string,
	ServiceCredentials: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.format">Format</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#format DataDatabricksLakewatchDatasources#format}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#location DataDatabricksLakewatchDatasources#location}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.rawTable">RawTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#raw_table DataDatabricksLakewatchDatasources#raw_table}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.awsSecretScope">AwsSecretScope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#aws_secret_scope DataDatabricksLakewatchDatasources#aws_secret_scope}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.envelope">Envelope</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#envelope DataDatabricksLakewatchDatasources#envelope}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.formatOptions">FormatOptions</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#format_options DataDatabricksLakewatchDatasources#format_options}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.includeExistingFiles">IncludeExistingFiles</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#include_existing_files DataDatabricksLakewatchDatasources#include_existing_files}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.overridePartitionColumns">OverridePartitionColumns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#override_partition_columns DataDatabricksLakewatchDatasources#override_partition_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.queueUrl">QueueUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#queue_url DataDatabricksLakewatchDatasources#queue_url}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.serviceCredentials">ServiceCredentials</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#service_credentials DataDatabricksLakewatchDatasources#service_credentials}. |

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.format"></a>

```go
Format *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#format DataDatabricksLakewatchDatasources#format}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#location DataDatabricksLakewatchDatasources#location}.

---

##### `RawTable`<sup>Required</sup> <a name="RawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.rawTable"></a>

```go
RawTable DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#raw_table DataDatabricksLakewatchDatasources#raw_table}.

---

##### `AwsSecretScope`<sup>Optional</sup> <a name="AwsSecretScope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.awsSecretScope"></a>

```go
AwsSecretScope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#aws_secret_scope DataDatabricksLakewatchDatasources#aws_secret_scope}.

---

##### `Envelope`<sup>Optional</sup> <a name="Envelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.envelope"></a>

```go
Envelope DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#envelope DataDatabricksLakewatchDatasources#envelope}.

---

##### `FormatOptions`<sup>Optional</sup> <a name="FormatOptions" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.formatOptions"></a>

```go
FormatOptions *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#format_options DataDatabricksLakewatchDatasources#format_options}.

---

##### `IncludeExistingFiles`<sup>Optional</sup> <a name="IncludeExistingFiles" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.includeExistingFiles"></a>

```go
IncludeExistingFiles interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#include_existing_files DataDatabricksLakewatchDatasources#include_existing_files}.

---

##### `OverridePartitionColumns`<sup>Optional</sup> <a name="OverridePartitionColumns" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.overridePartitionColumns"></a>

```go
OverridePartitionColumns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#override_partition_columns DataDatabricksLakewatchDatasources#override_partition_columns}.

---

##### `QueueUrl`<sup>Optional</sup> <a name="QueueUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.queueUrl"></a>

```go
QueueUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#queue_url DataDatabricksLakewatchDatasources#queue_url}.

---

##### `ServiceCredentials`<sup>Optional</sup> <a name="ServiceCredentials" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.serviceCredentials"></a>

```go
ServiceCredentials *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#service_credentials DataDatabricksLakewatchDatasources#service_credentials}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

&datadatabrickslakewatchdatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable {
	TableName: *string,
	CatalogName: *string,
	SchemaName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable.property.catalogName">CatalogName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable.property.schemaName">SchemaName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}. |

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}.

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable.property.catalogName"></a>

```go
CatalogName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

&datadatabrickslakewatchdatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope {
	CloudWatchLogs: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs,
	JsonArray: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope.property.cloudWatchLogs">CloudWatchLogs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#cloud_watch_logs DataDatabricksLakewatchDatasources#cloud_watch_logs}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope.property.jsonArray">JsonArray</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#json_array DataDatabricksLakewatchDatasources#json_array}. |

---

##### `CloudWatchLogs`<sup>Optional</sup> <a name="CloudWatchLogs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope.property.cloudWatchLogs"></a>

```go
CloudWatchLogs DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#cloud_watch_logs DataDatabricksLakewatchDatasources#cloud_watch_logs}.

---

##### `JsonArray`<sup>Optional</sup> <a name="JsonArray" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope.property.jsonArray"></a>

```go
JsonArray DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#json_array DataDatabricksLakewatchDatasources#json_array}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

&datadatabrickslakewatchdatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs {
	HeaderRetention: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs.property.headerRetention">HeaderRetention</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#header_retention DataDatabricksLakewatchDatasources#header_retention}. |

---

##### `HeaderRetention`<sup>Optional</sup> <a name="HeaderRetention" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs.property.headerRetention"></a>

```go
HeaderRetention interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#header_retention DataDatabricksLakewatchDatasources#header_retention}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

&datadatabrickslakewatchdatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray {
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#path DataDatabricksLakewatchDatasources#path}. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#path DataDatabricksLakewatchDatasources#path}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

&datadatabrickslakewatchdatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable {
	TableName: *string,
	CatalogName: *string,
	SchemaName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable.property.catalogName">CatalogName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable.property.schemaName">SchemaName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}. |

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}.

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable.property.catalogName"></a>

```go
CatalogName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy <a name="DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

&datadatabrickslakewatchdatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy {
	DisplayName: *string,
	Email: *string,
	Id: *string,
	PrincipalType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#display_name DataDatabricksLakewatchDatasources#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#email DataDatabricksLakewatchDatasources#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.property.principalType">PrincipalType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#principal_type DataDatabricksLakewatchDatasources#principal_type}. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#display_name DataDatabricksLakewatchDatasources#display_name}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#email DataDatabricksLakewatchDatasources#email}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrincipalType`<sup>Optional</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.property.principalType"></a>

```go
PrincipalType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#principal_type DataDatabricksLakewatchDatasources#principal_type}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesExistingTable <a name="DataDatabricksLakewatchDatasourcesDatasourcesExistingTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

&datadatabrickslakewatchdatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable {
	Name: *string,
	Catalog: *string,
	IncludeExistingRows: interface{},
	Schema: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#name DataDatabricksLakewatchDatasources#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.property.catalog">Catalog</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog DataDatabricksLakewatchDatasources#catalog}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.property.includeExistingRows">IncludeExistingRows</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#include_existing_rows DataDatabricksLakewatchDatasources#include_existing_rows}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.property.schema">Schema</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema DataDatabricksLakewatchDatasources#schema}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#name DataDatabricksLakewatchDatasources#name}.

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.property.catalog"></a>

```go
Catalog *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog DataDatabricksLakewatchDatasources#catalog}.

---

##### `IncludeExistingRows`<sup>Optional</sup> <a name="IncludeExistingRows" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.property.includeExistingRows"></a>

```go
IncludeExistingRows interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#include_existing_rows DataDatabricksLakewatchDatasources#include_existing_rows}.

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema DataDatabricksLakewatchDatasources#schema}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesOwner <a name="DataDatabricksLakewatchDatasourcesDatasourcesOwner" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

&datadatabrickslakewatchdatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner {
	DisplayName: *string,
	Email: *string,
	Id: *string,
	PrincipalType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#display_name DataDatabricksLakewatchDatasources#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#email DataDatabricksLakewatchDatasources#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.property.principalType">PrincipalType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#principal_type DataDatabricksLakewatchDatasources#principal_type}. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#display_name DataDatabricksLakewatchDatasources#display_name}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#email DataDatabricksLakewatchDatasources#email}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrincipalType`<sup>Optional</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.property.principalType"></a>

```go
PrincipalType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#principal_type DataDatabricksLakewatchDatasources#principal_type}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesParsers <a name="DataDatabricksLakewatchDatasourcesDatasourcesParsers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

&datadatabrickslakewatchdatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers {
	Id: *string,
	Version: *string,
	TargetTable: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#version DataDatabricksLakewatchDatasources#version}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers.property.targetTable">TargetTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable">DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#target_table DataDatabricksLakewatchDatasources#target_table}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#version DataDatabricksLakewatchDatasources#version}.

---

##### `TargetTable`<sup>Optional</sup> <a name="TargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers.property.targetTable"></a>

```go
TargetTable DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable">DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#target_table DataDatabricksLakewatchDatasources#target_table}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable <a name="DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

&datadatabrickslakewatchdatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable {
	TableName: *string,
	CatalogName: *string,
	SchemaName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable.property.catalogName">CatalogName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable.property.schemaName">SchemaName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}. |

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}.

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable.property.catalogName"></a>

```go
CatalogName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable <a name="DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

&datadatabrickslakewatchdatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable {
	TableName: *string,
	CatalogName: *string,
	SchemaName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable.property.catalogName">CatalogName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable.property.schemaName">SchemaName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}. |

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}.

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable.property.catalogName"></a>

```go
CatalogName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig <a name="DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

&datadatabrickslakewatchdatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#workspace_id DataDatabricksLakewatchDatasources#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#workspace_id DataDatabricksLakewatchDatasources#workspace_id}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesSchedule <a name="DataDatabricksLakewatchDatasourcesDatasourcesSchedule" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

&datadatabrickslakewatchdatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule {
	AtLeastEvery: *string,
	ComputeGroup: *string,
	Continuous: interface{},
	CronExpression: *string,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.atLeastEvery">AtLeastEvery</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#at_least_every DataDatabricksLakewatchDatasources#at_least_every}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.computeGroup">ComputeGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#compute_group DataDatabricksLakewatchDatasources#compute_group}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.continuous">Continuous</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#continuous DataDatabricksLakewatchDatasources#continuous}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.cronExpression">CronExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#cron_expression DataDatabricksLakewatchDatasources#cron_expression}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#enabled DataDatabricksLakewatchDatasources#enabled}. |

---

##### `AtLeastEvery`<sup>Optional</sup> <a name="AtLeastEvery" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.atLeastEvery"></a>

```go
AtLeastEvery *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#at_least_every DataDatabricksLakewatchDatasources#at_least_every}.

---

##### `ComputeGroup`<sup>Optional</sup> <a name="ComputeGroup" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.computeGroup"></a>

```go
ComputeGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#compute_group DataDatabricksLakewatchDatasources#compute_group}.

---

##### `Continuous`<sup>Optional</sup> <a name="Continuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.continuous"></a>

```go
Continuous interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#continuous DataDatabricksLakewatchDatasources#continuous}.

---

##### `CronExpression`<sup>Optional</sup> <a name="CronExpression" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.cronExpression"></a>

```go
CronExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#cron_expression DataDatabricksLakewatchDatasources#cron_expression}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#enabled DataDatabricksLakewatchDatasources#enabled}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesStatus <a name="DataDatabricksLakewatchDatasourcesDatasourcesStatus" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

&datadatabrickslakewatchdatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatus {

}
```


### DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob <a name="DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

&datadatabrickslakewatchdatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob {

}
```


### DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline <a name="DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

&datadatabrickslakewatchdatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline {

}
```


### DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection <a name="DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

&datadatabrickslakewatchdatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection {
	ConnectionName: *string,
	Configuration: *map[string]*string,
	StartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection.property.connectionName">ConnectionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#connection_name DataDatabricksLakewatchDatasources#connection_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection.property.configuration">Configuration</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#configuration DataDatabricksLakewatchDatasources#configuration}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection.property.startTime">StartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#start_time DataDatabricksLakewatchDatasources#start_time}. |

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection.property.connectionName"></a>

```go
ConnectionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#connection_name DataDatabricksLakewatchDatasources#connection_name}.

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection.property.configuration"></a>

```go
Configuration *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#configuration DataDatabricksLakewatchDatasources#configuration}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#start_time DataDatabricksLakewatchDatasources#start_time}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy <a name="DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

&datadatabrickslakewatchdatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy {
	DisplayName: *string,
	Email: *string,
	Id: *string,
	PrincipalType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#display_name DataDatabricksLakewatchDatasources#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#email DataDatabricksLakewatchDatasources#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.property.principalType">PrincipalType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#principal_type DataDatabricksLakewatchDatasources#principal_type}. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#display_name DataDatabricksLakewatchDatasources#display_name}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#email DataDatabricksLakewatchDatasources#email}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrincipalType`<sup>Optional</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.property.principalType"></a>

```go
PrincipalType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#principal_type DataDatabricksLakewatchDatasources#principal_type}.

---

### DataDatabricksLakewatchDatasourcesProviderConfig <a name="DataDatabricksLakewatchDatasourcesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

&datadatabrickslakewatchdatasources.DataDatabricksLakewatchDatasourcesProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#workspace_id DataDatabricksLakewatchDatasources#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#workspace_id DataDatabricksLakewatchDatasources#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

datadatabrickslakewatchdatasources.NewDataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.resetCatalogName">ResetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.resetCatalogName"></a>

```go
func ResetCatalogName()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.resetSchemaName"></a>

```go
func ResetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.catalogNameInput"></a>

```go
func CatalogNameInput() *string
```

- *Type:* *string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

datadatabrickslakewatchdatasources.NewDataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.resetHeaderRetention">ResetHeaderRetention</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeaderRetention` <a name="ResetHeaderRetention" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.resetHeaderRetention"></a>

```go
func ResetHeaderRetention()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetentionInput">HeaderRetentionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetention">HeaderRetention</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderRetentionInput`<sup>Optional</sup> <a name="HeaderRetentionInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetentionInput"></a>

```go
func HeaderRetentionInput() interface{}
```

- *Type:* interface{}

---

##### `HeaderRetention`<sup>Required</sup> <a name="HeaderRetention" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetention"></a>

```go
func HeaderRetention() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

datadatabrickslakewatchdatasources.NewDataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

datadatabrickslakewatchdatasources.NewDataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.putCloudWatchLogs">PutCloudWatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.putJsonArray">PutJsonArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.resetCloudWatchLogs">ResetCloudWatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.resetJsonArray">ResetJsonArray</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudWatchLogs` <a name="PutCloudWatchLogs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.putCloudWatchLogs"></a>

```go
func PutCloudWatchLogs(value DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.putCloudWatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs</a>

---

##### `PutJsonArray` <a name="PutJsonArray" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.putJsonArray"></a>

```go
func PutJsonArray(value DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.putJsonArray.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray</a>

---

##### `ResetCloudWatchLogs` <a name="ResetCloudWatchLogs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.resetCloudWatchLogs"></a>

```go
func ResetCloudWatchLogs()
```

##### `ResetJsonArray` <a name="ResetJsonArray" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.resetJsonArray"></a>

```go
func ResetJsonArray()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.cloudWatchLogs">CloudWatchLogs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.jsonArray">JsonArray</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.cloudWatchLogsInput">CloudWatchLogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.jsonArrayInput">JsonArrayInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudWatchLogs`<sup>Required</sup> <a name="CloudWatchLogs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.cloudWatchLogs"></a>

```go
func CloudWatchLogs() DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference</a>

---

##### `JsonArray`<sup>Required</sup> <a name="JsonArray" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.jsonArray"></a>

```go
func JsonArray() DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference</a>

---

##### `CloudWatchLogsInput`<sup>Optional</sup> <a name="CloudWatchLogsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.cloudWatchLogsInput"></a>

```go
func CloudWatchLogsInput() interface{}
```

- *Type:* interface{}

---

##### `JsonArrayInput`<sup>Optional</sup> <a name="JsonArrayInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.jsonArrayInput"></a>

```go
func JsonArrayInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

datadatabrickslakewatchdatasources.NewDataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.putEnvelope">PutEnvelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.putRawTable">PutRawTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetAwsSecretScope">ResetAwsSecretScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetEnvelope">ResetEnvelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetFormatOptions">ResetFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetIncludeExistingFiles">ResetIncludeExistingFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetOverridePartitionColumns">ResetOverridePartitionColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetQueueUrl">ResetQueueUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetServiceCredentials">ResetServiceCredentials</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnvelope` <a name="PutEnvelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.putEnvelope"></a>

```go
func PutEnvelope(value DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.putEnvelope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope</a>

---

##### `PutRawTable` <a name="PutRawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.putRawTable"></a>

```go
func PutRawTable(value DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.putRawTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable</a>

---

##### `ResetAwsSecretScope` <a name="ResetAwsSecretScope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetAwsSecretScope"></a>

```go
func ResetAwsSecretScope()
```

##### `ResetEnvelope` <a name="ResetEnvelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetEnvelope"></a>

```go
func ResetEnvelope()
```

##### `ResetFormatOptions` <a name="ResetFormatOptions" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetFormatOptions"></a>

```go
func ResetFormatOptions()
```

##### `ResetIncludeExistingFiles` <a name="ResetIncludeExistingFiles" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetIncludeExistingFiles"></a>

```go
func ResetIncludeExistingFiles()
```

##### `ResetOverridePartitionColumns` <a name="ResetOverridePartitionColumns" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetOverridePartitionColumns"></a>

```go
func ResetOverridePartitionColumns()
```

##### `ResetQueueUrl` <a name="ResetQueueUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetQueueUrl"></a>

```go
func ResetQueueUrl()
```

##### `ResetServiceCredentials` <a name="ResetServiceCredentials" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetServiceCredentials"></a>

```go
func ResetServiceCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.effectiveIncludeExistingFiles">EffectiveIncludeExistingFiles</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.effectiveRawTable">EffectiveRawTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.envelope">Envelope</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.rawTable">RawTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.awsSecretScopeInput">AwsSecretScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.envelopeInput">EnvelopeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.formatOptionsInput">FormatOptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.includeExistingFilesInput">IncludeExistingFilesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.overridePartitionColumnsInput">OverridePartitionColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.queueUrlInput">QueueUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.rawTableInput">RawTableInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.serviceCredentialsInput">ServiceCredentialsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.awsSecretScope">AwsSecretScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.formatOptions">FormatOptions</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.includeExistingFiles">IncludeExistingFiles</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.overridePartitionColumns">OverridePartitionColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.queueUrl">QueueUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.serviceCredentials">ServiceCredentials</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader">DataDatabricksLakewatchDatasourcesDatasourcesAutoloader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectiveIncludeExistingFiles`<sup>Required</sup> <a name="EffectiveIncludeExistingFiles" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.effectiveIncludeExistingFiles"></a>

```go
func EffectiveIncludeExistingFiles() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EffectiveRawTable`<sup>Required</sup> <a name="EffectiveRawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.effectiveRawTable"></a>

```go
func EffectiveRawTable() DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference</a>

---

##### `Envelope`<sup>Required</sup> <a name="Envelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.envelope"></a>

```go
func Envelope() DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference</a>

---

##### `RawTable`<sup>Required</sup> <a name="RawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.rawTable"></a>

```go
func RawTable() DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference</a>

---

##### `AwsSecretScopeInput`<sup>Optional</sup> <a name="AwsSecretScopeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.awsSecretScopeInput"></a>

```go
func AwsSecretScopeInput() *string
```

- *Type:* *string

---

##### `EnvelopeInput`<sup>Optional</sup> <a name="EnvelopeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.envelopeInput"></a>

```go
func EnvelopeInput() interface{}
```

- *Type:* interface{}

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `FormatOptionsInput`<sup>Optional</sup> <a name="FormatOptionsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.formatOptionsInput"></a>

```go
func FormatOptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IncludeExistingFilesInput`<sup>Optional</sup> <a name="IncludeExistingFilesInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.includeExistingFilesInput"></a>

```go
func IncludeExistingFilesInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `OverridePartitionColumnsInput`<sup>Optional</sup> <a name="OverridePartitionColumnsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.overridePartitionColumnsInput"></a>

```go
func OverridePartitionColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `QueueUrlInput`<sup>Optional</sup> <a name="QueueUrlInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.queueUrlInput"></a>

```go
func QueueUrlInput() *string
```

- *Type:* *string

---

##### `RawTableInput`<sup>Optional</sup> <a name="RawTableInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.rawTableInput"></a>

```go
func RawTableInput() DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable</a>

---

##### `ServiceCredentialsInput`<sup>Optional</sup> <a name="ServiceCredentialsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.serviceCredentialsInput"></a>

```go
func ServiceCredentialsInput() *string
```

- *Type:* *string

---

##### `AwsSecretScope`<sup>Required</sup> <a name="AwsSecretScope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.awsSecretScope"></a>

```go
func AwsSecretScope() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `FormatOptions`<sup>Required</sup> <a name="FormatOptions" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.formatOptions"></a>

```go
func FormatOptions() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IncludeExistingFiles`<sup>Required</sup> <a name="IncludeExistingFiles" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.includeExistingFiles"></a>

```go
func IncludeExistingFiles() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `OverridePartitionColumns`<sup>Required</sup> <a name="OverridePartitionColumns" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.overridePartitionColumns"></a>

```go
func OverridePartitionColumns() *[]*string
```

- *Type:* *[]*string

---

##### `QueueUrl`<sup>Required</sup> <a name="QueueUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.queueUrl"></a>

```go
func QueueUrl() *string
```

- *Type:* *string

---

##### `ServiceCredentials`<sup>Required</sup> <a name="ServiceCredentials" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.serviceCredentials"></a>

```go
func ServiceCredentials() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchDatasourcesDatasourcesAutoloader
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader">DataDatabricksLakewatchDatasourcesDatasourcesAutoloader</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

datadatabrickslakewatchdatasources.NewDataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.resetCatalogName">ResetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.resetCatalogName"></a>

```go
func ResetCatalogName()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.resetSchemaName"></a>

```go
func ResetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.catalogNameInput"></a>

```go
func CatalogNameInput() *string
```

- *Type:* *string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

datadatabrickslakewatchdatasources.NewDataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resetPrincipalType">ResetPrincipalType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetPrincipalType` <a name="ResetPrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resetPrincipalType"></a>

```go
func ResetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.principalTypeInput">PrincipalTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.principalType">PrincipalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy">DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrincipalTypeInput`<sup>Optional</sup> <a name="PrincipalTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.principalTypeInput"></a>

```go
func PrincipalTypeInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.principalType"></a>

```go
func PrincipalType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy">DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

datadatabrickslakewatchdatasources.NewDataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resetIncludeExistingRows">ResetIncludeExistingRows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resetCatalog"></a>

```go
func ResetCatalog()
```

##### `ResetIncludeExistingRows` <a name="ResetIncludeExistingRows" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resetIncludeExistingRows"></a>

```go
func ResetIncludeExistingRows()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resetSchema"></a>

```go
func ResetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.effectiveCatalog">EffectiveCatalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.effectiveName">EffectiveName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.effectiveSchema">EffectiveSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.catalogInput">CatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.includeExistingRowsInput">IncludeExistingRowsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.catalog">Catalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.includeExistingRows">IncludeExistingRows</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable">DataDatabricksLakewatchDatasourcesDatasourcesExistingTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectiveCatalog`<sup>Required</sup> <a name="EffectiveCatalog" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.effectiveCatalog"></a>

```go
func EffectiveCatalog() *string
```

- *Type:* *string

---

##### `EffectiveName`<sup>Required</sup> <a name="EffectiveName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.effectiveName"></a>

```go
func EffectiveName() *string
```

- *Type:* *string

---

##### `EffectiveSchema`<sup>Required</sup> <a name="EffectiveSchema" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.effectiveSchema"></a>

```go
func EffectiveSchema() *string
```

- *Type:* *string

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.catalogInput"></a>

```go
func CatalogInput() *string
```

- *Type:* *string

---

##### `IncludeExistingRowsInput`<sup>Optional</sup> <a name="IncludeExistingRowsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.includeExistingRowsInput"></a>

```go
func IncludeExistingRowsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.catalog"></a>

```go
func Catalog() *string
```

- *Type:* *string

---

##### `IncludeExistingRows`<sup>Required</sup> <a name="IncludeExistingRows" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.includeExistingRows"></a>

```go
func IncludeExistingRows() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchDatasourcesDatasourcesExistingTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable">DataDatabricksLakewatchDatasourcesDatasourcesExistingTable</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesList <a name="DataDatabricksLakewatchDatasourcesDatasourcesList" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

datadatabrickslakewatchdatasources.NewDataDatabricksLakewatchDatasourcesDatasourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksLakewatchDatasourcesDatasourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.get"></a>

```go
func Get(index *f64) DataDatabricksLakewatchDatasourcesDatasourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchDatasourcesDatasourcesOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

datadatabrickslakewatchdatasources.NewDataDatabricksLakewatchDatasourcesDatasourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksLakewatchDatasourcesDatasourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.annotations">Annotations</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.autoloader">Autoloader</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.computeMode">ComputeMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.computeWorkspaceId">ComputeWorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.createdBy">CreatedBy</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.datasourceId">DatasourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.datasourceName">DatasourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.effectiveCatalogName">EffectiveCatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.effectiveDatasourceName">EffectiveDatasourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.effectiveRunAsPrincipal">EffectiveRunAsPrincipal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.effectiveSchemaName">EffectiveSchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.existingTable">ExistingTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.owner">Owner</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.parsers">Parsers</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList">DataDatabricksLakewatchDatasourcesDatasourcesParsersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.runAsPrincipal">RunAsPrincipal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.status">Status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.unityCatalogConnection">UnityCatalogConnection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.updatedBy">UpdatedBy</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.warehouseId">WarehouseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources">DataDatabricksLakewatchDatasourcesDatasources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.annotations"></a>

```go
func Annotations() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Autoloader`<sup>Required</sup> <a name="Autoloader" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.autoloader"></a>

```go
func Autoloader() DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference</a>

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `ComputeMode`<sup>Required</sup> <a name="ComputeMode" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.computeMode"></a>

```go
func ComputeMode() *string
```

- *Type:* *string

---

##### `ComputeWorkspaceId`<sup>Required</sup> <a name="ComputeWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.computeWorkspaceId"></a>

```go
func ComputeWorkspaceId() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.createdBy"></a>

```go
func CreatedBy() DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DatasourceId`<sup>Required</sup> <a name="DatasourceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.datasourceId"></a>

```go
func DatasourceId() *string
```

- *Type:* *string

---

##### `DatasourceName`<sup>Required</sup> <a name="DatasourceName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.datasourceName"></a>

```go
func DatasourceName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EffectiveCatalogName`<sup>Required</sup> <a name="EffectiveCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.effectiveCatalogName"></a>

```go
func EffectiveCatalogName() *string
```

- *Type:* *string

---

##### `EffectiveDatasourceName`<sup>Required</sup> <a name="EffectiveDatasourceName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.effectiveDatasourceName"></a>

```go
func EffectiveDatasourceName() *string
```

- *Type:* *string

---

##### `EffectiveRunAsPrincipal`<sup>Required</sup> <a name="EffectiveRunAsPrincipal" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.effectiveRunAsPrincipal"></a>

```go
func EffectiveRunAsPrincipal() *string
```

- *Type:* *string

---

##### `EffectiveSchemaName`<sup>Required</sup> <a name="EffectiveSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.effectiveSchemaName"></a>

```go
func EffectiveSchemaName() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ExistingTable`<sup>Required</sup> <a name="ExistingTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.existingTable"></a>

```go
func ExistingTable() DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference</a>

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.owner"></a>

```go
func Owner() DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference</a>

---

##### `Parsers`<sup>Required</sup> <a name="Parsers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.parsers"></a>

```go
func Parsers() DataDatabricksLakewatchDatasourcesDatasourcesParsersList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList">DataDatabricksLakewatchDatasourcesDatasourcesParsersList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference</a>

---

##### `RunAsPrincipal`<sup>Required</sup> <a name="RunAsPrincipal" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.runAsPrincipal"></a>

```go
func RunAsPrincipal() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.schedule"></a>

```go
func Schedule() DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference</a>

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.status"></a>

```go
func Status() DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference</a>

---

##### `UnityCatalogConnection`<sup>Required</sup> <a name="UnityCatalogConnection" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.unityCatalogConnection"></a>

```go
func UnityCatalogConnection() DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference</a>

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.updatedBy"></a>

```go
func UpdatedBy() DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.warehouseId"></a>

```go
func WarehouseId() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchDatasourcesDatasources
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources">DataDatabricksLakewatchDatasourcesDatasources</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

datadatabrickslakewatchdatasources.NewDataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resetPrincipalType">ResetPrincipalType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetPrincipalType` <a name="ResetPrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resetPrincipalType"></a>

```go
func ResetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.principalTypeInput">PrincipalTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.principalType">PrincipalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner">DataDatabricksLakewatchDatasourcesDatasourcesOwner</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrincipalTypeInput`<sup>Optional</sup> <a name="PrincipalTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.principalTypeInput"></a>

```go
func PrincipalTypeInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.principalType"></a>

```go
func PrincipalType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchDatasourcesDatasourcesOwner
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner">DataDatabricksLakewatchDatasourcesDatasourcesOwner</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

datadatabrickslakewatchdatasources.NewDataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.resetCatalogName">ResetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.resetCatalogName"></a>

```go
func ResetCatalogName()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.resetSchemaName"></a>

```go
func ResetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable">DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.catalogNameInput"></a>

```go
func CatalogNameInput() *string
```

- *Type:* *string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable">DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesParsersList <a name="DataDatabricksLakewatchDatasourcesDatasourcesParsersList" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

datadatabrickslakewatchdatasources.NewDataDatabricksLakewatchDatasourcesDatasourcesParsersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksLakewatchDatasourcesDatasourcesParsersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.get"></a>

```go
func Get(index *f64) DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

datadatabrickslakewatchdatasources.NewDataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.putTargetTable">PutTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.resetTargetTable">ResetTargetTable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetTable` <a name="PutTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.putTargetTable"></a>

```go
func PutTargetTable(value DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.putTargetTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable">DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable</a>

---

##### `ResetTargetTable` <a name="ResetTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.resetTargetTable"></a>

```go
func ResetTargetTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.effectiveTargetTable">EffectiveTargetTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.targetTable">TargetTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.targetTableInput">TargetTableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers">DataDatabricksLakewatchDatasourcesDatasourcesParsers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectiveTargetTable`<sup>Required</sup> <a name="EffectiveTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.effectiveTargetTable"></a>

```go
func EffectiveTargetTable() DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference</a>

---

##### `TargetTable`<sup>Required</sup> <a name="TargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.targetTable"></a>

```go
func TargetTable() DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TargetTableInput`<sup>Optional</sup> <a name="TargetTableInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.targetTableInput"></a>

```go
func TargetTableInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchDatasourcesDatasourcesParsers
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers">DataDatabricksLakewatchDatasourcesDatasourcesParsers</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

datadatabrickslakewatchdatasources.NewDataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.resetCatalogName">ResetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.resetCatalogName"></a>

```go
func ResetCatalogName()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.resetSchemaName"></a>

```go
func ResetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.catalogNameInput"></a>

```go
func CatalogNameInput() *string
```

- *Type:* *string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

datadatabrickslakewatchdatasources.NewDataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

datadatabrickslakewatchdatasources.NewDataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetAtLeastEvery">ResetAtLeastEvery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetComputeGroup">ResetComputeGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetContinuous">ResetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetCronExpression">ResetCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAtLeastEvery` <a name="ResetAtLeastEvery" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetAtLeastEvery"></a>

```go
func ResetAtLeastEvery()
```

##### `ResetComputeGroup` <a name="ResetComputeGroup" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetComputeGroup"></a>

```go
func ResetComputeGroup()
```

##### `ResetContinuous` <a name="ResetContinuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetContinuous"></a>

```go
func ResetContinuous()
```

##### `ResetCronExpression` <a name="ResetCronExpression" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetCronExpression"></a>

```go
func ResetCronExpression()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.atLeastEveryInput">AtLeastEveryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.computeGroupInput">ComputeGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.continuousInput">ContinuousInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.cronExpressionInput">CronExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.atLeastEvery">AtLeastEvery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.computeGroup">ComputeGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.continuous">Continuous</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.cronExpression">CronExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule">DataDatabricksLakewatchDatasourcesDatasourcesSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AtLeastEveryInput`<sup>Optional</sup> <a name="AtLeastEveryInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.atLeastEveryInput"></a>

```go
func AtLeastEveryInput() *string
```

- *Type:* *string

---

##### `ComputeGroupInput`<sup>Optional</sup> <a name="ComputeGroupInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.computeGroupInput"></a>

```go
func ComputeGroupInput() *string
```

- *Type:* *string

---

##### `ContinuousInput`<sup>Optional</sup> <a name="ContinuousInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.continuousInput"></a>

```go
func ContinuousInput() interface{}
```

- *Type:* interface{}

---

##### `CronExpressionInput`<sup>Optional</sup> <a name="CronExpressionInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.cronExpressionInput"></a>

```go
func CronExpressionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AtLeastEvery`<sup>Required</sup> <a name="AtLeastEvery" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.atLeastEvery"></a>

```go
func AtLeastEvery() *string
```

- *Type:* *string

---

##### `ComputeGroup`<sup>Required</sup> <a name="ComputeGroup" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.computeGroup"></a>

```go
func ComputeGroup() *string
```

- *Type:* *string

---

##### `Continuous`<sup>Required</sup> <a name="Continuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.continuous"></a>

```go
func Continuous() interface{}
```

- *Type:* interface{}

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.cronExpression"></a>

```go
func CronExpression() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchDatasourcesDatasourcesSchedule
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule">DataDatabricksLakewatchDatasourcesDatasourcesSchedule</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

datadatabrickslakewatchdatasources.NewDataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.jobId">JobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lastCompleteTime">LastCompleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lastErrorMessage">LastErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lastStartTime">LastStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lastStatusChangeTime">LastStatusChangeTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lifecycleState">LifecycleState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.pipelineId">PipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.runState">RunState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob">DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.jobId"></a>

```go
func JobId() *string
```

- *Type:* *string

---

##### `LastCompleteTime`<sup>Required</sup> <a name="LastCompleteTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lastCompleteTime"></a>

```go
func LastCompleteTime() *string
```

- *Type:* *string

---

##### `LastErrorMessage`<sup>Required</sup> <a name="LastErrorMessage" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lastErrorMessage"></a>

```go
func LastErrorMessage() *string
```

- *Type:* *string

---

##### `LastStartTime`<sup>Required</sup> <a name="LastStartTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lastStartTime"></a>

```go
func LastStartTime() *string
```

- *Type:* *string

---

##### `LastStatusChangeTime`<sup>Required</sup> <a name="LastStatusChangeTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lastStatusChangeTime"></a>

```go
func LastStatusChangeTime() *string
```

- *Type:* *string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lifecycleState"></a>

```go
func LifecycleState() *string
```

- *Type:* *string

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.pipelineId"></a>

```go
func PipelineId() *string
```

- *Type:* *string

---

##### `RunState`<sup>Required</sup> <a name="RunState" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.runState"></a>

```go
func RunState() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob">DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

datadatabrickslakewatchdatasources.NewDataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.jobId">JobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lastCompleteTime">LastCompleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lastErrorMessage">LastErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lastStartTime">LastStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lastStatusChangeTime">LastStatusChangeTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lifecycleState">LifecycleState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.pipelineId">PipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.runState">RunState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline">DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.jobId"></a>

```go
func JobId() *string
```

- *Type:* *string

---

##### `LastCompleteTime`<sup>Required</sup> <a name="LastCompleteTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lastCompleteTime"></a>

```go
func LastCompleteTime() *string
```

- *Type:* *string

---

##### `LastErrorMessage`<sup>Required</sup> <a name="LastErrorMessage" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lastErrorMessage"></a>

```go
func LastErrorMessage() *string
```

- *Type:* *string

---

##### `LastStartTime`<sup>Required</sup> <a name="LastStartTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lastStartTime"></a>

```go
func LastStartTime() *string
```

- *Type:* *string

---

##### `LastStatusChangeTime`<sup>Required</sup> <a name="LastStatusChangeTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lastStatusChangeTime"></a>

```go
func LastStatusChangeTime() *string
```

- *Type:* *string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lifecycleState"></a>

```go
func LifecycleState() *string
```

- *Type:* *string

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.pipelineId"></a>

```go
func PipelineId() *string
```

- *Type:* *string

---

##### `RunState`<sup>Required</sup> <a name="RunState" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.runState"></a>

```go
func RunState() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline">DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

datadatabrickslakewatchdatasources.NewDataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.ingestionJob">IngestionJob</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.ingestionPipeline">IngestionPipeline</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatus">DataDatabricksLakewatchDatasourcesDatasourcesStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IngestionJob`<sup>Required</sup> <a name="IngestionJob" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.ingestionJob"></a>

```go
func IngestionJob() DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference</a>

---

##### `IngestionPipeline`<sup>Required</sup> <a name="IngestionPipeline" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.ingestionPipeline"></a>

```go
func IngestionPipeline() DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchDatasourcesDatasourcesStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatus">DataDatabricksLakewatchDatasourcesDatasourcesStatus</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

datadatabrickslakewatchdatasources.NewDataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.resetConfiguration"></a>

```go
func ResetConfiguration()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.connector">Connector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.effectiveStartTime">EffectiveStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.configurationInput">ConfigurationInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.configuration">Configuration</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.connectionName">ConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection">DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Connector`<sup>Required</sup> <a name="Connector" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.connector"></a>

```go
func Connector() *string
```

- *Type:* *string

---

##### `EffectiveStartTime`<sup>Required</sup> <a name="EffectiveStartTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.effectiveStartTime"></a>

```go
func EffectiveStartTime() *string
```

- *Type:* *string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.configurationInput"></a>

```go
func ConfigurationInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.connectionNameInput"></a>

```go
func ConnectionNameInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.configuration"></a>

```go
func Configuration() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.connectionName"></a>

```go
func ConnectionName() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection">DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

datadatabrickslakewatchdatasources.NewDataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resetPrincipalType">ResetPrincipalType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetPrincipalType` <a name="ResetPrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resetPrincipalType"></a>

```go
func ResetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.principalTypeInput">PrincipalTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.principalType">PrincipalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy">DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrincipalTypeInput`<sup>Optional</sup> <a name="PrincipalTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.principalTypeInput"></a>

```go
func PrincipalTypeInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.principalType"></a>

```go
func PrincipalType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy">DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy</a>

---


### DataDatabricksLakewatchDatasourcesProviderConfigOutputReference <a name="DataDatabricksLakewatchDatasourcesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasources"

datadatabrickslakewatchdatasources.NewDataDatabricksLakewatchDatasourcesProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourcesProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



