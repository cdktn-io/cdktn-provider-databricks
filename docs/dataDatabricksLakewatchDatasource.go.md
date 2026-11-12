# `dataDatabricksLakewatchDatasource` Submodule <a name="`dataDatabricksLakewatchDatasource` Submodule" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksLakewatchDatasource <a name="DataDatabricksLakewatchDatasource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource databricks_lakewatch_datasource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

datadatabrickslakewatchdatasource.NewDataDatabricksLakewatchDatasource(scope Construct, id *string, config DataDatabricksLakewatchDatasourceConfig) DataDatabricksLakewatchDatasource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig">DataDatabricksLakewatchDatasourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig">DataDatabricksLakewatchDatasourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksLakewatchDatasourceProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig">DataDatabricksLakewatchDatasourceProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksLakewatchDatasource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

datadatabrickslakewatchdatasource.DataDatabricksLakewatchDatasource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

datadatabrickslakewatchdatasource.DataDatabricksLakewatchDatasource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

datadatabrickslakewatchdatasource.DataDatabricksLakewatchDatasource_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

datadatabrickslakewatchdatasource.DataDatabricksLakewatchDatasource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksLakewatchDatasource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksLakewatchDatasource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksLakewatchDatasource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksLakewatchDatasource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.annotations">Annotations</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.autoloader">Autoloader</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference">DataDatabricksLakewatchDatasourceAutoloaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.computeMode">ComputeMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.computeWorkspaceId">ComputeWorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.createdBy">CreatedBy</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference">DataDatabricksLakewatchDatasourceCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.datasourceId">DatasourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.datasourceName">DatasourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.effectiveCatalogName">EffectiveCatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.effectiveDatasourceName">EffectiveDatasourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.effectiveRunAsPrincipal">EffectiveRunAsPrincipal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.effectiveSchemaName">EffectiveSchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.existingTable">ExistingTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference">DataDatabricksLakewatchDatasourceExistingTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.owner">Owner</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference">DataDatabricksLakewatchDatasourceOwnerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.parsers">Parsers</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList">DataDatabricksLakewatchDatasourceParsersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference">DataDatabricksLakewatchDatasourceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.runAsPrincipal">RunAsPrincipal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference">DataDatabricksLakewatchDatasourceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.status">Status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference">DataDatabricksLakewatchDatasourceStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.unityCatalogConnection">UnityCatalogConnection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference">DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.updatedBy">UpdatedBy</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference">DataDatabricksLakewatchDatasourceUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.warehouseId">WarehouseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.annotations"></a>

```go
func Annotations() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Autoloader`<sup>Required</sup> <a name="Autoloader" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.autoloader"></a>

```go
func Autoloader() DataDatabricksLakewatchDatasourceAutoloaderOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference">DataDatabricksLakewatchDatasourceAutoloaderOutputReference</a>

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `ComputeMode`<sup>Required</sup> <a name="ComputeMode" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.computeMode"></a>

```go
func ComputeMode() *string
```

- *Type:* *string

---

##### `ComputeWorkspaceId`<sup>Required</sup> <a name="ComputeWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.computeWorkspaceId"></a>

```go
func ComputeWorkspaceId() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.createdBy"></a>

```go
func CreatedBy() DataDatabricksLakewatchDatasourceCreatedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference">DataDatabricksLakewatchDatasourceCreatedByOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DatasourceId`<sup>Required</sup> <a name="DatasourceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.datasourceId"></a>

```go
func DatasourceId() *string
```

- *Type:* *string

---

##### `DatasourceName`<sup>Required</sup> <a name="DatasourceName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.datasourceName"></a>

```go
func DatasourceName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EffectiveCatalogName`<sup>Required</sup> <a name="EffectiveCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.effectiveCatalogName"></a>

```go
func EffectiveCatalogName() *string
```

- *Type:* *string

---

##### `EffectiveDatasourceName`<sup>Required</sup> <a name="EffectiveDatasourceName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.effectiveDatasourceName"></a>

```go
func EffectiveDatasourceName() *string
```

- *Type:* *string

---

##### `EffectiveRunAsPrincipal`<sup>Required</sup> <a name="EffectiveRunAsPrincipal" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.effectiveRunAsPrincipal"></a>

```go
func EffectiveRunAsPrincipal() *string
```

- *Type:* *string

---

##### `EffectiveSchemaName`<sup>Required</sup> <a name="EffectiveSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.effectiveSchemaName"></a>

```go
func EffectiveSchemaName() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ExistingTable`<sup>Required</sup> <a name="ExistingTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.existingTable"></a>

```go
func ExistingTable() DataDatabricksLakewatchDatasourceExistingTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference">DataDatabricksLakewatchDatasourceExistingTableOutputReference</a>

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.owner"></a>

```go
func Owner() DataDatabricksLakewatchDatasourceOwnerOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference">DataDatabricksLakewatchDatasourceOwnerOutputReference</a>

---

##### `Parsers`<sup>Required</sup> <a name="Parsers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.parsers"></a>

```go
func Parsers() DataDatabricksLakewatchDatasourceParsersList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList">DataDatabricksLakewatchDatasourceParsersList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksLakewatchDatasourceProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference">DataDatabricksLakewatchDatasourceProviderConfigOutputReference</a>

---

##### `RunAsPrincipal`<sup>Required</sup> <a name="RunAsPrincipal" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.runAsPrincipal"></a>

```go
func RunAsPrincipal() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.schedule"></a>

```go
func Schedule() DataDatabricksLakewatchDatasourceScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference">DataDatabricksLakewatchDatasourceScheduleOutputReference</a>

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.status"></a>

```go
func Status() DataDatabricksLakewatchDatasourceStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference">DataDatabricksLakewatchDatasourceStatusOutputReference</a>

---

##### `UnityCatalogConnection`<sup>Required</sup> <a name="UnityCatalogConnection" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.unityCatalogConnection"></a>

```go
func UnityCatalogConnection() DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference">DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference</a>

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.updatedBy"></a>

```go
func UpdatedBy() DataDatabricksLakewatchDatasourceUpdatedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference">DataDatabricksLakewatchDatasourceUpdatedByOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.warehouseId"></a>

```go
func WarehouseId() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksLakewatchDatasourceAutoloader <a name="DataDatabricksLakewatchDatasourceAutoloader" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

&datadatabrickslakewatchdatasource.DataDatabricksLakewatchDatasourceAutoloader {
	Format: *string,
	Location: *string,
	RawTable: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable,
	AwsSecretScope: *string,
	Envelope: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope,
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
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.format">Format</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#format DataDatabricksLakewatchDatasource#format}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#location DataDatabricksLakewatchDatasource#location}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.rawTable">RawTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable">DataDatabricksLakewatchDatasourceAutoloaderRawTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#raw_table DataDatabricksLakewatchDatasource#raw_table}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.awsSecretScope">AwsSecretScope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#aws_secret_scope DataDatabricksLakewatchDatasource#aws_secret_scope}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.envelope">Envelope</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope">DataDatabricksLakewatchDatasourceAutoloaderEnvelope</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#envelope DataDatabricksLakewatchDatasource#envelope}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.formatOptions">FormatOptions</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#format_options DataDatabricksLakewatchDatasource#format_options}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.includeExistingFiles">IncludeExistingFiles</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#include_existing_files DataDatabricksLakewatchDatasource#include_existing_files}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.overridePartitionColumns">OverridePartitionColumns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#override_partition_columns DataDatabricksLakewatchDatasource#override_partition_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.queueUrl">QueueUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#queue_url DataDatabricksLakewatchDatasource#queue_url}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.serviceCredentials">ServiceCredentials</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#service_credentials DataDatabricksLakewatchDatasource#service_credentials}. |

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.format"></a>

```go
Format *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#format DataDatabricksLakewatchDatasource#format}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#location DataDatabricksLakewatchDatasource#location}.

---

##### `RawTable`<sup>Required</sup> <a name="RawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.rawTable"></a>

```go
RawTable DataDatabricksLakewatchDatasourceAutoloaderRawTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable">DataDatabricksLakewatchDatasourceAutoloaderRawTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#raw_table DataDatabricksLakewatchDatasource#raw_table}.

---

##### `AwsSecretScope`<sup>Optional</sup> <a name="AwsSecretScope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.awsSecretScope"></a>

```go
AwsSecretScope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#aws_secret_scope DataDatabricksLakewatchDatasource#aws_secret_scope}.

---

##### `Envelope`<sup>Optional</sup> <a name="Envelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.envelope"></a>

```go
Envelope DataDatabricksLakewatchDatasourceAutoloaderEnvelope
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope">DataDatabricksLakewatchDatasourceAutoloaderEnvelope</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#envelope DataDatabricksLakewatchDatasource#envelope}.

---

##### `FormatOptions`<sup>Optional</sup> <a name="FormatOptions" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.formatOptions"></a>

```go
FormatOptions *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#format_options DataDatabricksLakewatchDatasource#format_options}.

---

##### `IncludeExistingFiles`<sup>Optional</sup> <a name="IncludeExistingFiles" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.includeExistingFiles"></a>

```go
IncludeExistingFiles interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#include_existing_files DataDatabricksLakewatchDatasource#include_existing_files}.

---

##### `OverridePartitionColumns`<sup>Optional</sup> <a name="OverridePartitionColumns" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.overridePartitionColumns"></a>

```go
OverridePartitionColumns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#override_partition_columns DataDatabricksLakewatchDatasource#override_partition_columns}.

---

##### `QueueUrl`<sup>Optional</sup> <a name="QueueUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.queueUrl"></a>

```go
QueueUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#queue_url DataDatabricksLakewatchDatasource#queue_url}.

---

##### `ServiceCredentials`<sup>Optional</sup> <a name="ServiceCredentials" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.serviceCredentials"></a>

```go
ServiceCredentials *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#service_credentials DataDatabricksLakewatchDatasource#service_credentials}.

---

### DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable <a name="DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

&datadatabrickslakewatchdatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable {
	TableName: *string,
	CatalogName: *string,
	SchemaName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable.property.catalogName">CatalogName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable.property.schemaName">SchemaName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}. |

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}.

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable.property.catalogName"></a>

```go
CatalogName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}.

---

### DataDatabricksLakewatchDatasourceAutoloaderEnvelope <a name="DataDatabricksLakewatchDatasourceAutoloaderEnvelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

&datadatabrickslakewatchdatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope {
	CloudWatchLogs: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs,
	JsonArray: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope.property.cloudWatchLogs">CloudWatchLogs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#cloud_watch_logs DataDatabricksLakewatchDatasource#cloud_watch_logs}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope.property.jsonArray">JsonArray</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#json_array DataDatabricksLakewatchDatasource#json_array}. |

---

##### `CloudWatchLogs`<sup>Optional</sup> <a name="CloudWatchLogs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope.property.cloudWatchLogs"></a>

```go
CloudWatchLogs DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#cloud_watch_logs DataDatabricksLakewatchDatasource#cloud_watch_logs}.

---

##### `JsonArray`<sup>Optional</sup> <a name="JsonArray" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope.property.jsonArray"></a>

```go
JsonArray DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#json_array DataDatabricksLakewatchDatasource#json_array}.

---

### DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs <a name="DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

&datadatabrickslakewatchdatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs {
	HeaderRetention: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs.property.headerRetention">HeaderRetention</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#header_retention DataDatabricksLakewatchDatasource#header_retention}. |

---

##### `HeaderRetention`<sup>Optional</sup> <a name="HeaderRetention" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs.property.headerRetention"></a>

```go
HeaderRetention interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#header_retention DataDatabricksLakewatchDatasource#header_retention}.

---

### DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray <a name="DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

&datadatabrickslakewatchdatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray {
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#path DataDatabricksLakewatchDatasource#path}. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#path DataDatabricksLakewatchDatasource#path}.

---

### DataDatabricksLakewatchDatasourceAutoloaderRawTable <a name="DataDatabricksLakewatchDatasourceAutoloaderRawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

&datadatabrickslakewatchdatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable {
	TableName: *string,
	CatalogName: *string,
	SchemaName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable.property.catalogName">CatalogName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable.property.schemaName">SchemaName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}. |

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}.

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable.property.catalogName"></a>

```go
CatalogName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}.

---

### DataDatabricksLakewatchDatasourceConfig <a name="DataDatabricksLakewatchDatasourceConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

&datadatabrickslakewatchdatasource.DataDatabricksLakewatchDatasourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#name DataDatabricksLakewatchDatasource#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig">DataDatabricksLakewatchDatasourceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#provider_config DataDatabricksLakewatchDatasource#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#name DataDatabricksLakewatchDatasource#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksLakewatchDatasourceProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig">DataDatabricksLakewatchDatasourceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#provider_config DataDatabricksLakewatchDatasource#provider_config}.

---

### DataDatabricksLakewatchDatasourceCreatedBy <a name="DataDatabricksLakewatchDatasourceCreatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

&datadatabrickslakewatchdatasource.DataDatabricksLakewatchDatasourceCreatedBy {
	DisplayName: *string,
	Email: *string,
	Id: *string,
	PrincipalType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#display_name DataDatabricksLakewatchDatasource#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#email DataDatabricksLakewatchDatasource#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#id DataDatabricksLakewatchDatasource#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.property.principalType">PrincipalType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#principal_type DataDatabricksLakewatchDatasource#principal_type}. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#display_name DataDatabricksLakewatchDatasource#display_name}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#email DataDatabricksLakewatchDatasource#email}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#id DataDatabricksLakewatchDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrincipalType`<sup>Optional</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.property.principalType"></a>

```go
PrincipalType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#principal_type DataDatabricksLakewatchDatasource#principal_type}.

---

### DataDatabricksLakewatchDatasourceExistingTable <a name="DataDatabricksLakewatchDatasourceExistingTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

&datadatabrickslakewatchdatasource.DataDatabricksLakewatchDatasourceExistingTable {
	Name: *string,
	Catalog: *string,
	IncludeExistingRows: interface{},
	Schema: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#name DataDatabricksLakewatchDatasource#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.property.catalog">Catalog</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog DataDatabricksLakewatchDatasource#catalog}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.property.includeExistingRows">IncludeExistingRows</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#include_existing_rows DataDatabricksLakewatchDatasource#include_existing_rows}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.property.schema">Schema</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema DataDatabricksLakewatchDatasource#schema}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#name DataDatabricksLakewatchDatasource#name}.

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.property.catalog"></a>

```go
Catalog *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog DataDatabricksLakewatchDatasource#catalog}.

---

##### `IncludeExistingRows`<sup>Optional</sup> <a name="IncludeExistingRows" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.property.includeExistingRows"></a>

```go
IncludeExistingRows interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#include_existing_rows DataDatabricksLakewatchDatasource#include_existing_rows}.

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema DataDatabricksLakewatchDatasource#schema}.

---

### DataDatabricksLakewatchDatasourceOwner <a name="DataDatabricksLakewatchDatasourceOwner" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

&datadatabrickslakewatchdatasource.DataDatabricksLakewatchDatasourceOwner {
	DisplayName: *string,
	Email: *string,
	Id: *string,
	PrincipalType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#display_name DataDatabricksLakewatchDatasource#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#email DataDatabricksLakewatchDatasource#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#id DataDatabricksLakewatchDatasource#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.property.principalType">PrincipalType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#principal_type DataDatabricksLakewatchDatasource#principal_type}. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#display_name DataDatabricksLakewatchDatasource#display_name}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#email DataDatabricksLakewatchDatasource#email}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#id DataDatabricksLakewatchDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrincipalType`<sup>Optional</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.property.principalType"></a>

```go
PrincipalType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#principal_type DataDatabricksLakewatchDatasource#principal_type}.

---

### DataDatabricksLakewatchDatasourceParsers <a name="DataDatabricksLakewatchDatasourceParsers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

&datadatabrickslakewatchdatasource.DataDatabricksLakewatchDatasourceParsers {
	Id: *string,
	Version: *string,
	TargetTable: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#id DataDatabricksLakewatchDatasource#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#version DataDatabricksLakewatchDatasource#version}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers.property.targetTable">TargetTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable">DataDatabricksLakewatchDatasourceParsersTargetTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#target_table DataDatabricksLakewatchDatasource#target_table}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#id DataDatabricksLakewatchDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#version DataDatabricksLakewatchDatasource#version}.

---

##### `TargetTable`<sup>Optional</sup> <a name="TargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers.property.targetTable"></a>

```go
TargetTable DataDatabricksLakewatchDatasourceParsersTargetTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable">DataDatabricksLakewatchDatasourceParsersTargetTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#target_table DataDatabricksLakewatchDatasource#target_table}.

---

### DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable <a name="DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

&datadatabrickslakewatchdatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable {
	TableName: *string,
	CatalogName: *string,
	SchemaName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable.property.catalogName">CatalogName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable.property.schemaName">SchemaName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}. |

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}.

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable.property.catalogName"></a>

```go
CatalogName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}.

---

### DataDatabricksLakewatchDatasourceParsersTargetTable <a name="DataDatabricksLakewatchDatasourceParsersTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

&datadatabrickslakewatchdatasource.DataDatabricksLakewatchDatasourceParsersTargetTable {
	TableName: *string,
	CatalogName: *string,
	SchemaName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable.property.catalogName">CatalogName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable.property.schemaName">SchemaName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}. |

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}.

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable.property.catalogName"></a>

```go
CatalogName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}.

---

### DataDatabricksLakewatchDatasourceProviderConfig <a name="DataDatabricksLakewatchDatasourceProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

&datadatabrickslakewatchdatasource.DataDatabricksLakewatchDatasourceProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#workspace_id DataDatabricksLakewatchDatasource#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#workspace_id DataDatabricksLakewatchDatasource#workspace_id}.

---

### DataDatabricksLakewatchDatasourceSchedule <a name="DataDatabricksLakewatchDatasourceSchedule" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

&datadatabrickslakewatchdatasource.DataDatabricksLakewatchDatasourceSchedule {
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
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.atLeastEvery">AtLeastEvery</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#at_least_every DataDatabricksLakewatchDatasource#at_least_every}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.computeGroup">ComputeGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#compute_group DataDatabricksLakewatchDatasource#compute_group}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.continuous">Continuous</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#continuous DataDatabricksLakewatchDatasource#continuous}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.cronExpression">CronExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#cron_expression DataDatabricksLakewatchDatasource#cron_expression}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#enabled DataDatabricksLakewatchDatasource#enabled}. |

---

##### `AtLeastEvery`<sup>Optional</sup> <a name="AtLeastEvery" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.atLeastEvery"></a>

```go
AtLeastEvery *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#at_least_every DataDatabricksLakewatchDatasource#at_least_every}.

---

##### `ComputeGroup`<sup>Optional</sup> <a name="ComputeGroup" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.computeGroup"></a>

```go
ComputeGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#compute_group DataDatabricksLakewatchDatasource#compute_group}.

---

##### `Continuous`<sup>Optional</sup> <a name="Continuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.continuous"></a>

```go
Continuous interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#continuous DataDatabricksLakewatchDatasource#continuous}.

---

##### `CronExpression`<sup>Optional</sup> <a name="CronExpression" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.cronExpression"></a>

```go
CronExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#cron_expression DataDatabricksLakewatchDatasource#cron_expression}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#enabled DataDatabricksLakewatchDatasource#enabled}.

---

### DataDatabricksLakewatchDatasourceStatus <a name="DataDatabricksLakewatchDatasourceStatus" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

&datadatabrickslakewatchdatasource.DataDatabricksLakewatchDatasourceStatus {

}
```


### DataDatabricksLakewatchDatasourceStatusIngestionJob <a name="DataDatabricksLakewatchDatasourceStatusIngestionJob" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJob.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

&datadatabrickslakewatchdatasource.DataDatabricksLakewatchDatasourceStatusIngestionJob {

}
```


### DataDatabricksLakewatchDatasourceStatusIngestionPipeline <a name="DataDatabricksLakewatchDatasourceStatusIngestionPipeline" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipeline"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipeline.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

&datadatabrickslakewatchdatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipeline {

}
```


### DataDatabricksLakewatchDatasourceUnityCatalogConnection <a name="DataDatabricksLakewatchDatasourceUnityCatalogConnection" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

&datadatabrickslakewatchdatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection {
	ConnectionName: *string,
	Configuration: *map[string]*string,
	StartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection.property.connectionName">ConnectionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#connection_name DataDatabricksLakewatchDatasource#connection_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection.property.configuration">Configuration</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#configuration DataDatabricksLakewatchDatasource#configuration}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection.property.startTime">StartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#start_time DataDatabricksLakewatchDatasource#start_time}. |

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection.property.connectionName"></a>

```go
ConnectionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#connection_name DataDatabricksLakewatchDatasource#connection_name}.

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection.property.configuration"></a>

```go
Configuration *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#configuration DataDatabricksLakewatchDatasource#configuration}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#start_time DataDatabricksLakewatchDatasource#start_time}.

---

### DataDatabricksLakewatchDatasourceUpdatedBy <a name="DataDatabricksLakewatchDatasourceUpdatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

&datadatabrickslakewatchdatasource.DataDatabricksLakewatchDatasourceUpdatedBy {
	DisplayName: *string,
	Email: *string,
	Id: *string,
	PrincipalType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#display_name DataDatabricksLakewatchDatasource#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#email DataDatabricksLakewatchDatasource#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#id DataDatabricksLakewatchDatasource#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.property.principalType">PrincipalType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#principal_type DataDatabricksLakewatchDatasource#principal_type}. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#display_name DataDatabricksLakewatchDatasource#display_name}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#email DataDatabricksLakewatchDatasource#email}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#id DataDatabricksLakewatchDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrincipalType`<sup>Optional</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.property.principalType"></a>

```go
PrincipalType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#principal_type DataDatabricksLakewatchDatasource#principal_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference <a name="DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

datadatabrickslakewatchdatasource.NewDataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resetCatalogName">ResetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resetCatalogName"></a>

```go
func ResetCatalogName()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resetSchemaName"></a>

```go
func ResetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable">DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.catalogNameInput"></a>

```go
func CatalogNameInput() *string
```

- *Type:* *string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable">DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable</a>

---


### DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference <a name="DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

datadatabrickslakewatchdatasource.NewDataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resetHeaderRetention">ResetHeaderRetention</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeaderRetention` <a name="ResetHeaderRetention" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resetHeaderRetention"></a>

```go
func ResetHeaderRetention()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetentionInput">HeaderRetentionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetention">HeaderRetention</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderRetentionInput`<sup>Optional</sup> <a name="HeaderRetentionInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetentionInput"></a>

```go
func HeaderRetentionInput() interface{}
```

- *Type:* interface{}

---

##### `HeaderRetention`<sup>Required</sup> <a name="HeaderRetention" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetention"></a>

```go
func HeaderRetention() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference <a name="DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

datadatabrickslakewatchdatasource.NewDataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference <a name="DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

datadatabrickslakewatchdatasource.NewDataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.putCloudWatchLogs">PutCloudWatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.putJsonArray">PutJsonArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.resetCloudWatchLogs">ResetCloudWatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.resetJsonArray">ResetJsonArray</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudWatchLogs` <a name="PutCloudWatchLogs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.putCloudWatchLogs"></a>

```go
func PutCloudWatchLogs(value DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.putCloudWatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a>

---

##### `PutJsonArray` <a name="PutJsonArray" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.putJsonArray"></a>

```go
func PutJsonArray(value DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.putJsonArray.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray</a>

---

##### `ResetCloudWatchLogs` <a name="ResetCloudWatchLogs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.resetCloudWatchLogs"></a>

```go
func ResetCloudWatchLogs()
```

##### `ResetJsonArray` <a name="ResetJsonArray" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.resetJsonArray"></a>

```go
func ResetJsonArray()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.cloudWatchLogs">CloudWatchLogs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.jsonArray">JsonArray</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.cloudWatchLogsInput">CloudWatchLogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.jsonArrayInput">JsonArrayInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudWatchLogs`<sup>Required</sup> <a name="CloudWatchLogs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.cloudWatchLogs"></a>

```go
func CloudWatchLogs() DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference</a>

---

##### `JsonArray`<sup>Required</sup> <a name="JsonArray" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.jsonArray"></a>

```go
func JsonArray() DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference</a>

---

##### `CloudWatchLogsInput`<sup>Optional</sup> <a name="CloudWatchLogsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.cloudWatchLogsInput"></a>

```go
func CloudWatchLogsInput() interface{}
```

- *Type:* interface{}

---

##### `JsonArrayInput`<sup>Optional</sup> <a name="JsonArrayInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.jsonArrayInput"></a>

```go
func JsonArrayInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchDatasourceAutoloaderOutputReference <a name="DataDatabricksLakewatchDatasourceAutoloaderOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

datadatabrickslakewatchdatasource.NewDataDatabricksLakewatchDatasourceAutoloaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourceAutoloaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.putEnvelope">PutEnvelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.putRawTable">PutRawTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetAwsSecretScope">ResetAwsSecretScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetEnvelope">ResetEnvelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetFormatOptions">ResetFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetIncludeExistingFiles">ResetIncludeExistingFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetOverridePartitionColumns">ResetOverridePartitionColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetQueueUrl">ResetQueueUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetServiceCredentials">ResetServiceCredentials</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnvelope` <a name="PutEnvelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.putEnvelope"></a>

```go
func PutEnvelope(value DataDatabricksLakewatchDatasourceAutoloaderEnvelope)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.putEnvelope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope">DataDatabricksLakewatchDatasourceAutoloaderEnvelope</a>

---

##### `PutRawTable` <a name="PutRawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.putRawTable"></a>

```go
func PutRawTable(value DataDatabricksLakewatchDatasourceAutoloaderRawTable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.putRawTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable">DataDatabricksLakewatchDatasourceAutoloaderRawTable</a>

---

##### `ResetAwsSecretScope` <a name="ResetAwsSecretScope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetAwsSecretScope"></a>

```go
func ResetAwsSecretScope()
```

##### `ResetEnvelope` <a name="ResetEnvelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetEnvelope"></a>

```go
func ResetEnvelope()
```

##### `ResetFormatOptions` <a name="ResetFormatOptions" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetFormatOptions"></a>

```go
func ResetFormatOptions()
```

##### `ResetIncludeExistingFiles` <a name="ResetIncludeExistingFiles" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetIncludeExistingFiles"></a>

```go
func ResetIncludeExistingFiles()
```

##### `ResetOverridePartitionColumns` <a name="ResetOverridePartitionColumns" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetOverridePartitionColumns"></a>

```go
func ResetOverridePartitionColumns()
```

##### `ResetQueueUrl` <a name="ResetQueueUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetQueueUrl"></a>

```go
func ResetQueueUrl()
```

##### `ResetServiceCredentials` <a name="ResetServiceCredentials" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetServiceCredentials"></a>

```go
func ResetServiceCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.effectiveIncludeExistingFiles">EffectiveIncludeExistingFiles</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.effectiveRawTable">EffectiveRawTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference">DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.envelope">Envelope</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.rawTable">RawTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference">DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.awsSecretScopeInput">AwsSecretScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.envelopeInput">EnvelopeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.formatOptionsInput">FormatOptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.includeExistingFilesInput">IncludeExistingFilesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.overridePartitionColumnsInput">OverridePartitionColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.queueUrlInput">QueueUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.rawTableInput">RawTableInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable">DataDatabricksLakewatchDatasourceAutoloaderRawTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.serviceCredentialsInput">ServiceCredentialsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.awsSecretScope">AwsSecretScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.formatOptions">FormatOptions</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.includeExistingFiles">IncludeExistingFiles</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.overridePartitionColumns">OverridePartitionColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.queueUrl">QueueUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.serviceCredentials">ServiceCredentials</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader">DataDatabricksLakewatchDatasourceAutoloader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectiveIncludeExistingFiles`<sup>Required</sup> <a name="EffectiveIncludeExistingFiles" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.effectiveIncludeExistingFiles"></a>

```go
func EffectiveIncludeExistingFiles() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EffectiveRawTable`<sup>Required</sup> <a name="EffectiveRawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.effectiveRawTable"></a>

```go
func EffectiveRawTable() DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference">DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference</a>

---

##### `Envelope`<sup>Required</sup> <a name="Envelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.envelope"></a>

```go
func Envelope() DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference</a>

---

##### `RawTable`<sup>Required</sup> <a name="RawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.rawTable"></a>

```go
func RawTable() DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference">DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference</a>

---

##### `AwsSecretScopeInput`<sup>Optional</sup> <a name="AwsSecretScopeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.awsSecretScopeInput"></a>

```go
func AwsSecretScopeInput() *string
```

- *Type:* *string

---

##### `EnvelopeInput`<sup>Optional</sup> <a name="EnvelopeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.envelopeInput"></a>

```go
func EnvelopeInput() interface{}
```

- *Type:* interface{}

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `FormatOptionsInput`<sup>Optional</sup> <a name="FormatOptionsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.formatOptionsInput"></a>

```go
func FormatOptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IncludeExistingFilesInput`<sup>Optional</sup> <a name="IncludeExistingFilesInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.includeExistingFilesInput"></a>

```go
func IncludeExistingFilesInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `OverridePartitionColumnsInput`<sup>Optional</sup> <a name="OverridePartitionColumnsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.overridePartitionColumnsInput"></a>

```go
func OverridePartitionColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `QueueUrlInput`<sup>Optional</sup> <a name="QueueUrlInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.queueUrlInput"></a>

```go
func QueueUrlInput() *string
```

- *Type:* *string

---

##### `RawTableInput`<sup>Optional</sup> <a name="RawTableInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.rawTableInput"></a>

```go
func RawTableInput() DataDatabricksLakewatchDatasourceAutoloaderRawTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable">DataDatabricksLakewatchDatasourceAutoloaderRawTable</a>

---

##### `ServiceCredentialsInput`<sup>Optional</sup> <a name="ServiceCredentialsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.serviceCredentialsInput"></a>

```go
func ServiceCredentialsInput() *string
```

- *Type:* *string

---

##### `AwsSecretScope`<sup>Required</sup> <a name="AwsSecretScope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.awsSecretScope"></a>

```go
func AwsSecretScope() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `FormatOptions`<sup>Required</sup> <a name="FormatOptions" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.formatOptions"></a>

```go
func FormatOptions() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IncludeExistingFiles`<sup>Required</sup> <a name="IncludeExistingFiles" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.includeExistingFiles"></a>

```go
func IncludeExistingFiles() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `OverridePartitionColumns`<sup>Required</sup> <a name="OverridePartitionColumns" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.overridePartitionColumns"></a>

```go
func OverridePartitionColumns() *[]*string
```

- *Type:* *[]*string

---

##### `QueueUrl`<sup>Required</sup> <a name="QueueUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.queueUrl"></a>

```go
func QueueUrl() *string
```

- *Type:* *string

---

##### `ServiceCredentials`<sup>Required</sup> <a name="ServiceCredentials" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.serviceCredentials"></a>

```go
func ServiceCredentials() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchDatasourceAutoloader
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader">DataDatabricksLakewatchDatasourceAutoloader</a>

---


### DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference <a name="DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

datadatabrickslakewatchdatasource.NewDataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.resetCatalogName">ResetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.resetCatalogName"></a>

```go
func ResetCatalogName()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.resetSchemaName"></a>

```go
func ResetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable">DataDatabricksLakewatchDatasourceAutoloaderRawTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.catalogNameInput"></a>

```go
func CatalogNameInput() *string
```

- *Type:* *string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchDatasourceAutoloaderRawTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable">DataDatabricksLakewatchDatasourceAutoloaderRawTable</a>

---


### DataDatabricksLakewatchDatasourceCreatedByOutputReference <a name="DataDatabricksLakewatchDatasourceCreatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

datadatabrickslakewatchdatasource.NewDataDatabricksLakewatchDatasourceCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourceCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resetPrincipalType">ResetPrincipalType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetPrincipalType` <a name="ResetPrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resetPrincipalType"></a>

```go
func ResetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.principalTypeInput">PrincipalTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.principalType">PrincipalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy">DataDatabricksLakewatchDatasourceCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrincipalTypeInput`<sup>Optional</sup> <a name="PrincipalTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.principalTypeInput"></a>

```go
func PrincipalTypeInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.principalType"></a>

```go
func PrincipalType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchDatasourceCreatedBy
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy">DataDatabricksLakewatchDatasourceCreatedBy</a>

---


### DataDatabricksLakewatchDatasourceExistingTableOutputReference <a name="DataDatabricksLakewatchDatasourceExistingTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

datadatabrickslakewatchdatasource.NewDataDatabricksLakewatchDatasourceExistingTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourceExistingTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resetIncludeExistingRows">ResetIncludeExistingRows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resetCatalog"></a>

```go
func ResetCatalog()
```

##### `ResetIncludeExistingRows` <a name="ResetIncludeExistingRows" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resetIncludeExistingRows"></a>

```go
func ResetIncludeExistingRows()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resetSchema"></a>

```go
func ResetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.effectiveCatalog">EffectiveCatalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.effectiveName">EffectiveName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.effectiveSchema">EffectiveSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.catalogInput">CatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.includeExistingRowsInput">IncludeExistingRowsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.catalog">Catalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.includeExistingRows">IncludeExistingRows</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable">DataDatabricksLakewatchDatasourceExistingTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectiveCatalog`<sup>Required</sup> <a name="EffectiveCatalog" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.effectiveCatalog"></a>

```go
func EffectiveCatalog() *string
```

- *Type:* *string

---

##### `EffectiveName`<sup>Required</sup> <a name="EffectiveName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.effectiveName"></a>

```go
func EffectiveName() *string
```

- *Type:* *string

---

##### `EffectiveSchema`<sup>Required</sup> <a name="EffectiveSchema" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.effectiveSchema"></a>

```go
func EffectiveSchema() *string
```

- *Type:* *string

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.catalogInput"></a>

```go
func CatalogInput() *string
```

- *Type:* *string

---

##### `IncludeExistingRowsInput`<sup>Optional</sup> <a name="IncludeExistingRowsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.includeExistingRowsInput"></a>

```go
func IncludeExistingRowsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.catalog"></a>

```go
func Catalog() *string
```

- *Type:* *string

---

##### `IncludeExistingRows`<sup>Required</sup> <a name="IncludeExistingRows" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.includeExistingRows"></a>

```go
func IncludeExistingRows() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchDatasourceExistingTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable">DataDatabricksLakewatchDatasourceExistingTable</a>

---


### DataDatabricksLakewatchDatasourceOwnerOutputReference <a name="DataDatabricksLakewatchDatasourceOwnerOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

datadatabrickslakewatchdatasource.NewDataDatabricksLakewatchDatasourceOwnerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourceOwnerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resetPrincipalType">ResetPrincipalType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetPrincipalType` <a name="ResetPrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resetPrincipalType"></a>

```go
func ResetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.principalTypeInput">PrincipalTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.principalType">PrincipalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner">DataDatabricksLakewatchDatasourceOwner</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrincipalTypeInput`<sup>Optional</sup> <a name="PrincipalTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.principalTypeInput"></a>

```go
func PrincipalTypeInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.principalType"></a>

```go
func PrincipalType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchDatasourceOwner
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner">DataDatabricksLakewatchDatasourceOwner</a>

---


### DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference <a name="DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

datadatabrickslakewatchdatasource.NewDataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.resetCatalogName">ResetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.resetCatalogName"></a>

```go
func ResetCatalogName()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.resetSchemaName"></a>

```go
func ResetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable">DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.catalogNameInput"></a>

```go
func CatalogNameInput() *string
```

- *Type:* *string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable">DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable</a>

---


### DataDatabricksLakewatchDatasourceParsersList <a name="DataDatabricksLakewatchDatasourceParsersList" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

datadatabrickslakewatchdatasource.NewDataDatabricksLakewatchDatasourceParsersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksLakewatchDatasourceParsersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.get"></a>

```go
func Get(index *f64) DataDatabricksLakewatchDatasourceParsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchDatasourceParsersOutputReference <a name="DataDatabricksLakewatchDatasourceParsersOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

datadatabrickslakewatchdatasource.NewDataDatabricksLakewatchDatasourceParsersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksLakewatchDatasourceParsersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.putTargetTable">PutTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.resetTargetTable">ResetTargetTable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetTable` <a name="PutTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.putTargetTable"></a>

```go
func PutTargetTable(value DataDatabricksLakewatchDatasourceParsersTargetTable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.putTargetTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable">DataDatabricksLakewatchDatasourceParsersTargetTable</a>

---

##### `ResetTargetTable` <a name="ResetTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.resetTargetTable"></a>

```go
func ResetTargetTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.effectiveTargetTable">EffectiveTargetTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference">DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.targetTable">TargetTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference">DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.targetTableInput">TargetTableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers">DataDatabricksLakewatchDatasourceParsers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectiveTargetTable`<sup>Required</sup> <a name="EffectiveTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.effectiveTargetTable"></a>

```go
func EffectiveTargetTable() DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference">DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference</a>

---

##### `TargetTable`<sup>Required</sup> <a name="TargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.targetTable"></a>

```go
func TargetTable() DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference">DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TargetTableInput`<sup>Optional</sup> <a name="TargetTableInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.targetTableInput"></a>

```go
func TargetTableInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchDatasourceParsers
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers">DataDatabricksLakewatchDatasourceParsers</a>

---


### DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference <a name="DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

datadatabrickslakewatchdatasource.NewDataDatabricksLakewatchDatasourceParsersTargetTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.resetCatalogName">ResetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.resetCatalogName"></a>

```go
func ResetCatalogName()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.resetSchemaName"></a>

```go
func ResetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.catalogNameInput"></a>

```go
func CatalogNameInput() *string
```

- *Type:* *string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchDatasourceProviderConfigOutputReference <a name="DataDatabricksLakewatchDatasourceProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

datadatabrickslakewatchdatasource.NewDataDatabricksLakewatchDatasourceProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourceProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchDatasourceScheduleOutputReference <a name="DataDatabricksLakewatchDatasourceScheduleOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

datadatabrickslakewatchdatasource.NewDataDatabricksLakewatchDatasourceScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourceScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetAtLeastEvery">ResetAtLeastEvery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetComputeGroup">ResetComputeGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetContinuous">ResetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetCronExpression">ResetCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAtLeastEvery` <a name="ResetAtLeastEvery" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetAtLeastEvery"></a>

```go
func ResetAtLeastEvery()
```

##### `ResetComputeGroup` <a name="ResetComputeGroup" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetComputeGroup"></a>

```go
func ResetComputeGroup()
```

##### `ResetContinuous` <a name="ResetContinuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetContinuous"></a>

```go
func ResetContinuous()
```

##### `ResetCronExpression` <a name="ResetCronExpression" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetCronExpression"></a>

```go
func ResetCronExpression()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.atLeastEveryInput">AtLeastEveryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.computeGroupInput">ComputeGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.continuousInput">ContinuousInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.cronExpressionInput">CronExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.atLeastEvery">AtLeastEvery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.computeGroup">ComputeGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.continuous">Continuous</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.cronExpression">CronExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule">DataDatabricksLakewatchDatasourceSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AtLeastEveryInput`<sup>Optional</sup> <a name="AtLeastEveryInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.atLeastEveryInput"></a>

```go
func AtLeastEveryInput() *string
```

- *Type:* *string

---

##### `ComputeGroupInput`<sup>Optional</sup> <a name="ComputeGroupInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.computeGroupInput"></a>

```go
func ComputeGroupInput() *string
```

- *Type:* *string

---

##### `ContinuousInput`<sup>Optional</sup> <a name="ContinuousInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.continuousInput"></a>

```go
func ContinuousInput() interface{}
```

- *Type:* interface{}

---

##### `CronExpressionInput`<sup>Optional</sup> <a name="CronExpressionInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.cronExpressionInput"></a>

```go
func CronExpressionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AtLeastEvery`<sup>Required</sup> <a name="AtLeastEvery" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.atLeastEvery"></a>

```go
func AtLeastEvery() *string
```

- *Type:* *string

---

##### `ComputeGroup`<sup>Required</sup> <a name="ComputeGroup" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.computeGroup"></a>

```go
func ComputeGroup() *string
```

- *Type:* *string

---

##### `Continuous`<sup>Required</sup> <a name="Continuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.continuous"></a>

```go
func Continuous() interface{}
```

- *Type:* interface{}

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.cronExpression"></a>

```go
func CronExpression() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchDatasourceSchedule
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule">DataDatabricksLakewatchDatasourceSchedule</a>

---


### DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference <a name="DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

datadatabrickslakewatchdatasource.NewDataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.jobId">JobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lastCompleteTime">LastCompleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lastErrorMessage">LastErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lastStartTime">LastStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lastStatusChangeTime">LastStatusChangeTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lifecycleState">LifecycleState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.pipelineId">PipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.runState">RunState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJob">DataDatabricksLakewatchDatasourceStatusIngestionJob</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.jobId"></a>

```go
func JobId() *string
```

- *Type:* *string

---

##### `LastCompleteTime`<sup>Required</sup> <a name="LastCompleteTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lastCompleteTime"></a>

```go
func LastCompleteTime() *string
```

- *Type:* *string

---

##### `LastErrorMessage`<sup>Required</sup> <a name="LastErrorMessage" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lastErrorMessage"></a>

```go
func LastErrorMessage() *string
```

- *Type:* *string

---

##### `LastStartTime`<sup>Required</sup> <a name="LastStartTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lastStartTime"></a>

```go
func LastStartTime() *string
```

- *Type:* *string

---

##### `LastStatusChangeTime`<sup>Required</sup> <a name="LastStatusChangeTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lastStatusChangeTime"></a>

```go
func LastStatusChangeTime() *string
```

- *Type:* *string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lifecycleState"></a>

```go
func LifecycleState() *string
```

- *Type:* *string

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.pipelineId"></a>

```go
func PipelineId() *string
```

- *Type:* *string

---

##### `RunState`<sup>Required</sup> <a name="RunState" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.runState"></a>

```go
func RunState() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchDatasourceStatusIngestionJob
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJob">DataDatabricksLakewatchDatasourceStatusIngestionJob</a>

---


### DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference <a name="DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

datadatabrickslakewatchdatasource.NewDataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.jobId">JobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastCompleteTime">LastCompleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastErrorMessage">LastErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastStartTime">LastStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastStatusChangeTime">LastStatusChangeTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lifecycleState">LifecycleState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.pipelineId">PipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.runState">RunState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipeline">DataDatabricksLakewatchDatasourceStatusIngestionPipeline</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.jobId"></a>

```go
func JobId() *string
```

- *Type:* *string

---

##### `LastCompleteTime`<sup>Required</sup> <a name="LastCompleteTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastCompleteTime"></a>

```go
func LastCompleteTime() *string
```

- *Type:* *string

---

##### `LastErrorMessage`<sup>Required</sup> <a name="LastErrorMessage" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastErrorMessage"></a>

```go
func LastErrorMessage() *string
```

- *Type:* *string

---

##### `LastStartTime`<sup>Required</sup> <a name="LastStartTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastStartTime"></a>

```go
func LastStartTime() *string
```

- *Type:* *string

---

##### `LastStatusChangeTime`<sup>Required</sup> <a name="LastStatusChangeTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastStatusChangeTime"></a>

```go
func LastStatusChangeTime() *string
```

- *Type:* *string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lifecycleState"></a>

```go
func LifecycleState() *string
```

- *Type:* *string

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.pipelineId"></a>

```go
func PipelineId() *string
```

- *Type:* *string

---

##### `RunState`<sup>Required</sup> <a name="RunState" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.runState"></a>

```go
func RunState() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchDatasourceStatusIngestionPipeline
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipeline">DataDatabricksLakewatchDatasourceStatusIngestionPipeline</a>

---


### DataDatabricksLakewatchDatasourceStatusOutputReference <a name="DataDatabricksLakewatchDatasourceStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

datadatabrickslakewatchdatasource.NewDataDatabricksLakewatchDatasourceStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourceStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.ingestionJob">IngestionJob</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference">DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.ingestionPipeline">IngestionPipeline</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference">DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatus">DataDatabricksLakewatchDatasourceStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IngestionJob`<sup>Required</sup> <a name="IngestionJob" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.ingestionJob"></a>

```go
func IngestionJob() DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference">DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference</a>

---

##### `IngestionPipeline`<sup>Required</sup> <a name="IngestionPipeline" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.ingestionPipeline"></a>

```go
func IngestionPipeline() DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference">DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchDatasourceStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatus">DataDatabricksLakewatchDatasourceStatus</a>

---


### DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference <a name="DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

datadatabrickslakewatchdatasource.NewDataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.resetConfiguration"></a>

```go
func ResetConfiguration()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.connector">Connector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.effectiveStartTime">EffectiveStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.configurationInput">ConfigurationInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.configuration">Configuration</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.connectionName">ConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection">DataDatabricksLakewatchDatasourceUnityCatalogConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Connector`<sup>Required</sup> <a name="Connector" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.connector"></a>

```go
func Connector() *string
```

- *Type:* *string

---

##### `EffectiveStartTime`<sup>Required</sup> <a name="EffectiveStartTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.effectiveStartTime"></a>

```go
func EffectiveStartTime() *string
```

- *Type:* *string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.configurationInput"></a>

```go
func ConfigurationInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.connectionNameInput"></a>

```go
func ConnectionNameInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.configuration"></a>

```go
func Configuration() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.connectionName"></a>

```go
func ConnectionName() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchDatasourceUnityCatalogConnection
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection">DataDatabricksLakewatchDatasourceUnityCatalogConnection</a>

---


### DataDatabricksLakewatchDatasourceUpdatedByOutputReference <a name="DataDatabricksLakewatchDatasourceUpdatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasource"

datadatabrickslakewatchdatasource.NewDataDatabricksLakewatchDatasourceUpdatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourceUpdatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resetPrincipalType">ResetPrincipalType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetPrincipalType` <a name="ResetPrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resetPrincipalType"></a>

```go
func ResetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.principalTypeInput">PrincipalTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.principalType">PrincipalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy">DataDatabricksLakewatchDatasourceUpdatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrincipalTypeInput`<sup>Optional</sup> <a name="PrincipalTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.principalTypeInput"></a>

```go
func PrincipalTypeInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.principalType"></a>

```go
func PrincipalType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchDatasourceUpdatedBy
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy">DataDatabricksLakewatchDatasourceUpdatedBy</a>

---



