# `dataDatabricksLakewatchBuiltinParserVersions` Submodule <a name="`dataDatabricksLakewatchBuiltinParserVersions` Submodule" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksLakewatchBuiltinParserVersions <a name="DataDatabricksLakewatchBuiltinParserVersions" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions databricks_lakewatch_builtin_parser_versions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchbuiltinparserversions"

datadatabrickslakewatchbuiltinparserversions.NewDataDatabricksLakewatchBuiltinParserVersions(scope Construct, id *string, config DataDatabricksLakewatchBuiltinParserVersionsConfig) DataDatabricksLakewatchBuiltinParserVersions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig">DataDatabricksLakewatchBuiltinParserVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig">DataDatabricksLakewatchBuiltinParserVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksLakewatchBuiltinParserVersionsProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsProviderConfig</a>

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.resetPageSize"></a>

```go
func ResetPageSize()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksLakewatchBuiltinParserVersions resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchbuiltinparserversions"

datadatabrickslakewatchbuiltinparserversions.DataDatabricksLakewatchBuiltinParserVersions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchbuiltinparserversions"

datadatabrickslakewatchbuiltinparserversions.DataDatabricksLakewatchBuiltinParserVersions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchbuiltinparserversions"

datadatabrickslakewatchbuiltinparserversions.DataDatabricksLakewatchBuiltinParserVersions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchbuiltinparserversions"

datadatabrickslakewatchbuiltinparserversions.DataDatabricksLakewatchBuiltinParserVersions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksLakewatchBuiltinParserVersions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksLakewatchBuiltinParserVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksLakewatchBuiltinParserVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksLakewatchBuiltinParserVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.builtinParserVersions">BuiltinParserVersions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference">DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.pageSizeInput">PageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.pageSize">PageSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `BuiltinParserVersions`<sup>Required</sup> <a name="BuiltinParserVersions" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.builtinParserVersions"></a>

```go
func BuiltinParserVersions() DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference">DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.pageSizeInput"></a>

```go
func PageSizeInput() *f64
```

- *Type:* *f64

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.pageSize"></a>

```go
func PageSize() *f64
```

- *Type:* *f64

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions <a name="DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchbuiltinparserversions"

&datadatabrickslakewatchbuiltinparserversions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions {
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#name DataDatabricksLakewatchBuiltinParserVersions#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#provider_config DataDatabricksLakewatchBuiltinParserVersions#provider_config}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#name DataDatabricksLakewatchBuiltinParserVersions#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#provider_config DataDatabricksLakewatchBuiltinParserVersions#provider_config}.

---

### DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig <a name="DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchbuiltinparserversions"

&datadatabrickslakewatchbuiltinparserversions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#workspace_id DataDatabricksLakewatchBuiltinParserVersions#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#workspace_id DataDatabricksLakewatchBuiltinParserVersions#workspace_id}.

---

### DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags <a name="DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchbuiltinparserversions"

&datadatabrickslakewatchbuiltinparserversions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#key DataDatabricksLakewatchBuiltinParserVersions#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#value DataDatabricksLakewatchBuiltinParserVersions#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#key DataDatabricksLakewatchBuiltinParserVersions#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#value DataDatabricksLakewatchBuiltinParserVersions#value}.

---

### DataDatabricksLakewatchBuiltinParserVersionsConfig <a name="DataDatabricksLakewatchBuiltinParserVersionsConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchbuiltinparserversions"

&datadatabrickslakewatchbuiltinparserversions.DataDatabricksLakewatchBuiltinParserVersionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Parent: *string,
	PageSize: *f64,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.parent">Parent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#parent DataDatabricksLakewatchBuiltinParserVersions#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.pageSize">PageSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#page_size DataDatabricksLakewatchBuiltinParserVersions#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#provider_config DataDatabricksLakewatchBuiltinParserVersions#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#parent DataDatabricksLakewatchBuiltinParserVersions#parent}.

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.pageSize"></a>

```go
PageSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#page_size DataDatabricksLakewatchBuiltinParserVersions#page_size}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksLakewatchBuiltinParserVersionsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#provider_config DataDatabricksLakewatchBuiltinParserVersions#provider_config}.

---

### DataDatabricksLakewatchBuiltinParserVersionsProviderConfig <a name="DataDatabricksLakewatchBuiltinParserVersionsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchbuiltinparserversions"

&datadatabrickslakewatchbuiltinparserversions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#workspace_id DataDatabricksLakewatchBuiltinParserVersions#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#workspace_id DataDatabricksLakewatchBuiltinParserVersions#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList <a name="DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchbuiltinparserversions"

datadatabrickslakewatchbuiltinparserversions.NewDataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.get"></a>

```go
func Get(index *f64) DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference <a name="DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchbuiltinparserversions"

datadatabrickslakewatchbuiltinparserversions.NewDataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.parserName">ParserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.spec">Spec</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ParserName`<sup>Required</sup> <a name="ParserName" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.parserName"></a>

```go
func ParserName() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.spec"></a>

```go
func Spec() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.tags"></a>

```go
func Tags() DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions</a>

---


### DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference <a name="DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchbuiltinparserversions"

datadatabrickslakewatchbuiltinparserversions.NewDataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList <a name="DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchbuiltinparserversions"

datadatabrickslakewatchbuiltinparserversions.NewDataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.get"></a>

```go
func Get(index *f64) DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference <a name="DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchbuiltinparserversions"

datadatabrickslakewatchbuiltinparserversions.NewDataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags</a>

---


### DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference <a name="DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchbuiltinparserversions"

datadatabrickslakewatchbuiltinparserversions.NewDataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



