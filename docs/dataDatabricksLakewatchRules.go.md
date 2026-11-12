# `dataDatabricksLakewatchRules` Submodule <a name="`dataDatabricksLakewatchRules` Submodule" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksLakewatchRules <a name="DataDatabricksLakewatchRules" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules databricks_lakewatch_rules}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

datadatabrickslakewatchrules.NewDataDatabricksLakewatchRules(scope Construct, id *string, config DataDatabricksLakewatchRulesConfig) DataDatabricksLakewatchRules
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig">DataDatabricksLakewatchRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig">DataDatabricksLakewatchRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetSchemaName">ResetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetView">ResetView</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksLakewatchRulesProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig">DataDatabricksLakewatchRulesProviderConfig</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetPageSize"></a>

```go
func ResetPageSize()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetSchemaName"></a>

```go
func ResetSchemaName()
```

##### `ResetView` <a name="ResetView" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetView"></a>

```go
func ResetView()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksLakewatchRules resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

datadatabrickslakewatchrules.DataDatabricksLakewatchRules_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

datadatabrickslakewatchrules.DataDatabricksLakewatchRules_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

datadatabrickslakewatchrules.DataDatabricksLakewatchRules_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

datadatabrickslakewatchrules.DataDatabricksLakewatchRules_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksLakewatchRules resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksLakewatchRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksLakewatchRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksLakewatchRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference">DataDatabricksLakewatchRulesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList">DataDatabricksLakewatchRulesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.catalogNameInput">CatalogNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.pageSizeInput">PageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.viewInput">ViewInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.pageSize">PageSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.view">View</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksLakewatchRulesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference">DataDatabricksLakewatchRulesProviderConfigOutputReference</a>

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.rules"></a>

```go
func Rules() DataDatabricksLakewatchRulesRulesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList">DataDatabricksLakewatchRulesRulesList</a>

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.catalogNameInput"></a>

```go
func CatalogNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.pageSizeInput"></a>

```go
func PageSizeInput() *f64
```

- *Type:* *f64

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `ViewInput`<sup>Optional</sup> <a name="ViewInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.viewInput"></a>

```go
func ViewInput() *string
```

- *Type:* *string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.pageSize"></a>

```go
func PageSize() *f64
```

- *Type:* *f64

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `View`<sup>Required</sup> <a name="View" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.view"></a>

```go
func View() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksLakewatchRulesConfig <a name="DataDatabricksLakewatchRulesConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

&datadatabrickslakewatchrules.DataDatabricksLakewatchRulesConfig {
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
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig,
	SchemaName: *string,
	View: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.catalogName">CatalogName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#catalog_name DataDatabricksLakewatchRules#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.filter">Filter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#filter DataDatabricksLakewatchRules#filter}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.pageSize">PageSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#page_size DataDatabricksLakewatchRules#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig">DataDatabricksLakewatchRulesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#provider_config DataDatabricksLakewatchRules#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.schemaName">SchemaName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#schema_name DataDatabricksLakewatchRules#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.view">View</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#view DataDatabricksLakewatchRules#view}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.catalogName"></a>

```go
CatalogName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#catalog_name DataDatabricksLakewatchRules#catalog_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#filter DataDatabricksLakewatchRules#filter}.

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.pageSize"></a>

```go
PageSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#page_size DataDatabricksLakewatchRules#page_size}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksLakewatchRulesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig">DataDatabricksLakewatchRulesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#provider_config DataDatabricksLakewatchRules#provider_config}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#schema_name DataDatabricksLakewatchRules#schema_name}.

---

##### `View`<sup>Optional</sup> <a name="View" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.view"></a>

```go
View *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#view DataDatabricksLakewatchRules#view}.

---

### DataDatabricksLakewatchRulesProviderConfig <a name="DataDatabricksLakewatchRulesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

&datadatabrickslakewatchrules.DataDatabricksLakewatchRulesProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#workspace_id DataDatabricksLakewatchRules#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#workspace_id DataDatabricksLakewatchRules#workspace_id}.

---

### DataDatabricksLakewatchRulesRules <a name="DataDatabricksLakewatchRulesRules" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

&datadatabrickslakewatchrules.DataDatabricksLakewatchRulesRules {
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRules.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#name DataDatabricksLakewatchRules#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRules.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfig">DataDatabricksLakewatchRulesRulesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#provider_config DataDatabricksLakewatchRules#provider_config}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRules.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#name DataDatabricksLakewatchRules#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRules.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksLakewatchRulesRulesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfig">DataDatabricksLakewatchRulesRulesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#provider_config DataDatabricksLakewatchRules#provider_config}.

---

### DataDatabricksLakewatchRulesRulesBatch <a name="DataDatabricksLakewatchRulesRulesBatch" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatch.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

&datadatabrickslakewatchrules.DataDatabricksLakewatchRulesRulesBatch {
	Custom: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom,
	Sql: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql,
	WarehouseId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatch.property.custom">Custom</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom">DataDatabricksLakewatchRulesRulesBatchCustom</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#custom DataDatabricksLakewatchRules#custom}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatch.property.sql">Sql</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql">DataDatabricksLakewatchRulesRulesBatchSql</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#sql DataDatabricksLakewatchRules#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatch.property.warehouseId">WarehouseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#warehouse_id DataDatabricksLakewatchRules#warehouse_id}. |

---

##### `Custom`<sup>Optional</sup> <a name="Custom" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatch.property.custom"></a>

```go
Custom DataDatabricksLakewatchRulesRulesBatchCustom
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom">DataDatabricksLakewatchRulesRulesBatchCustom</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#custom DataDatabricksLakewatchRules#custom}.

---

##### `Sql`<sup>Optional</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatch.property.sql"></a>

```go
Sql DataDatabricksLakewatchRulesRulesBatchSql
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql">DataDatabricksLakewatchRulesRulesBatchSql</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#sql DataDatabricksLakewatchRules#sql}.

---

##### `WarehouseId`<sup>Optional</sup> <a name="WarehouseId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatch.property.warehouseId"></a>

```go
WarehouseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#warehouse_id DataDatabricksLakewatchRules#warehouse_id}.

---

### DataDatabricksLakewatchRulesRulesBatchCustom <a name="DataDatabricksLakewatchRulesRulesBatchCustom" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

&datadatabrickslakewatchrules.DataDatabricksLakewatchRulesRulesBatchCustom {
	Notebook: *string,
	Options: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom.property.notebook">Notebook</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#notebook DataDatabricksLakewatchRules#notebook}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom.property.options">Options</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#options DataDatabricksLakewatchRules#options}. |

---

##### `Notebook`<sup>Required</sup> <a name="Notebook" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom.property.notebook"></a>

```go
Notebook *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#notebook DataDatabricksLakewatchRules#notebook}.

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom.property.options"></a>

```go
Options *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#options DataDatabricksLakewatchRules#options}.

---

### DataDatabricksLakewatchRulesRulesBatchSql <a name="DataDatabricksLakewatchRulesRulesBatchSql" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

&datadatabrickslakewatchrules.DataDatabricksLakewatchRulesRulesBatchSql {
	Query: *string,
	DefaultCatalogName: *string,
	DefaultSchemaName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql.property.query">Query</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#query DataDatabricksLakewatchRules#query}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql.property.defaultCatalogName">DefaultCatalogName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#default_catalog_name DataDatabricksLakewatchRules#default_catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql.property.defaultSchemaName">DefaultSchemaName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#default_schema_name DataDatabricksLakewatchRules#default_schema_name}. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql.property.query"></a>

```go
Query *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#query DataDatabricksLakewatchRules#query}.

---

##### `DefaultCatalogName`<sup>Optional</sup> <a name="DefaultCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql.property.defaultCatalogName"></a>

```go
DefaultCatalogName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#default_catalog_name DataDatabricksLakewatchRules#default_catalog_name}.

---

##### `DefaultSchemaName`<sup>Optional</sup> <a name="DefaultSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql.property.defaultSchemaName"></a>

```go
DefaultSchemaName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#default_schema_name DataDatabricksLakewatchRules#default_schema_name}.

---

### DataDatabricksLakewatchRulesRulesCreatedBy <a name="DataDatabricksLakewatchRulesRulesCreatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

&datadatabrickslakewatchrules.DataDatabricksLakewatchRulesRulesCreatedBy {
	DisplayName: *string,
	Email: *string,
	Id: *string,
	PrincipalType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#display_name DataDatabricksLakewatchRules#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#email DataDatabricksLakewatchRules#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#id DataDatabricksLakewatchRules#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy.property.principalType">PrincipalType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#principal_type DataDatabricksLakewatchRules#principal_type}. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#display_name DataDatabricksLakewatchRules#display_name}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#email DataDatabricksLakewatchRules#email}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#id DataDatabricksLakewatchRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrincipalType`<sup>Optional</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy.property.principalType"></a>

```go
PrincipalType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#principal_type DataDatabricksLakewatchRules#principal_type}.

---

### DataDatabricksLakewatchRulesRulesMitre <a name="DataDatabricksLakewatchRulesRulesMitre" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

&datadatabrickslakewatchrules.DataDatabricksLakewatchRulesRulesMitre {
	SubTechnique: *string,
	SubTechniqueId: *string,
	Tactic: *string,
	Taxonomy: *string,
	Technique: *string,
	TechniqueId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.subTechnique">SubTechnique</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#sub_technique DataDatabricksLakewatchRules#sub_technique}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.subTechniqueId">SubTechniqueId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#sub_technique_id DataDatabricksLakewatchRules#sub_technique_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.tactic">Tactic</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#tactic DataDatabricksLakewatchRules#tactic}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.taxonomy">Taxonomy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#taxonomy DataDatabricksLakewatchRules#taxonomy}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.technique">Technique</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#technique DataDatabricksLakewatchRules#technique}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.techniqueId">TechniqueId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#technique_id DataDatabricksLakewatchRules#technique_id}. |

---

##### `SubTechnique`<sup>Optional</sup> <a name="SubTechnique" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.subTechnique"></a>

```go
SubTechnique *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#sub_technique DataDatabricksLakewatchRules#sub_technique}.

---

##### `SubTechniqueId`<sup>Optional</sup> <a name="SubTechniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.subTechniqueId"></a>

```go
SubTechniqueId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#sub_technique_id DataDatabricksLakewatchRules#sub_technique_id}.

---

##### `Tactic`<sup>Optional</sup> <a name="Tactic" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.tactic"></a>

```go
Tactic *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#tactic DataDatabricksLakewatchRules#tactic}.

---

##### `Taxonomy`<sup>Optional</sup> <a name="Taxonomy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.taxonomy"></a>

```go
Taxonomy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#taxonomy DataDatabricksLakewatchRules#taxonomy}.

---

##### `Technique`<sup>Optional</sup> <a name="Technique" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.technique"></a>

```go
Technique *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#technique DataDatabricksLakewatchRules#technique}.

---

##### `TechniqueId`<sup>Optional</sup> <a name="TechniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.techniqueId"></a>

```go
TechniqueId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#technique_id DataDatabricksLakewatchRules#technique_id}.

---

### DataDatabricksLakewatchRulesRulesOriginalContentPack <a name="DataDatabricksLakewatchRulesRulesOriginalContentPack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPack.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

&datadatabrickslakewatchrules.DataDatabricksLakewatchRulesRulesOriginalContentPack {

}
```


### DataDatabricksLakewatchRulesRulesOutput <a name="DataDatabricksLakewatchRulesRulesOutput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

&datadatabrickslakewatchrules.DataDatabricksLakewatchRulesRulesOutput {
	Context: *map[string]*string,
	DefaultContext: interface{},
	EventTimeColumn: *string,
	Summary: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput.property.context">Context</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#context DataDatabricksLakewatchRules#context}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput.property.defaultContext">DefaultContext</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#default_context DataDatabricksLakewatchRules#default_context}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput.property.eventTimeColumn">EventTimeColumn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#event_time_column DataDatabricksLakewatchRules#event_time_column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput.property.summary">Summary</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#summary DataDatabricksLakewatchRules#summary}. |

---

##### `Context`<sup>Optional</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput.property.context"></a>

```go
Context *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#context DataDatabricksLakewatchRules#context}.

---

##### `DefaultContext`<sup>Optional</sup> <a name="DefaultContext" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput.property.defaultContext"></a>

```go
DefaultContext interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#default_context DataDatabricksLakewatchRules#default_context}.

---

##### `EventTimeColumn`<sup>Optional</sup> <a name="EventTimeColumn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput.property.eventTimeColumn"></a>

```go
EventTimeColumn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#event_time_column DataDatabricksLakewatchRules#event_time_column}.

---

##### `Summary`<sup>Optional</sup> <a name="Summary" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput.property.summary"></a>

```go
Summary *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#summary DataDatabricksLakewatchRules#summary}.

---

### DataDatabricksLakewatchRulesRulesOwner <a name="DataDatabricksLakewatchRulesRulesOwner" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

&datadatabrickslakewatchrules.DataDatabricksLakewatchRulesRulesOwner {
	DisplayName: *string,
	Email: *string,
	Id: *string,
	PrincipalType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#display_name DataDatabricksLakewatchRules#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#email DataDatabricksLakewatchRules#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#id DataDatabricksLakewatchRules#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner.property.principalType">PrincipalType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#principal_type DataDatabricksLakewatchRules#principal_type}. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#display_name DataDatabricksLakewatchRules#display_name}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#email DataDatabricksLakewatchRules#email}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#id DataDatabricksLakewatchRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrincipalType`<sup>Optional</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner.property.principalType"></a>

```go
PrincipalType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#principal_type DataDatabricksLakewatchRules#principal_type}.

---

### DataDatabricksLakewatchRulesRulesProviderConfig <a name="DataDatabricksLakewatchRulesRulesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

&datadatabrickslakewatchrules.DataDatabricksLakewatchRulesRulesProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#workspace_id DataDatabricksLakewatchRules#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#workspace_id DataDatabricksLakewatchRules#workspace_id}.

---

### DataDatabricksLakewatchRulesRulesSchedule <a name="DataDatabricksLakewatchRulesRulesSchedule" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

&datadatabrickslakewatchrules.DataDatabricksLakewatchRulesRulesSchedule {
	AtLeastEvery: *string,
	Continuous: interface{},
	CronExpression: *string,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule.property.atLeastEvery">AtLeastEvery</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#at_least_every DataDatabricksLakewatchRules#at_least_every}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule.property.continuous">Continuous</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#continuous DataDatabricksLakewatchRules#continuous}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule.property.cronExpression">CronExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#cron_expression DataDatabricksLakewatchRules#cron_expression}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#enabled DataDatabricksLakewatchRules#enabled}. |

---

##### `AtLeastEvery`<sup>Optional</sup> <a name="AtLeastEvery" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule.property.atLeastEvery"></a>

```go
AtLeastEvery *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#at_least_every DataDatabricksLakewatchRules#at_least_every}.

---

##### `Continuous`<sup>Optional</sup> <a name="Continuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule.property.continuous"></a>

```go
Continuous interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#continuous DataDatabricksLakewatchRules#continuous}.

---

##### `CronExpression`<sup>Optional</sup> <a name="CronExpression" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule.property.cronExpression"></a>

```go
CronExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#cron_expression DataDatabricksLakewatchRules#cron_expression}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#enabled DataDatabricksLakewatchRules#enabled}.

---

### DataDatabricksLakewatchRulesRulesStatus <a name="DataDatabricksLakewatchRulesRulesStatus" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

&datadatabrickslakewatchrules.DataDatabricksLakewatchRulesRulesStatus {

}
```


### DataDatabricksLakewatchRulesRulesTimerange <a name="DataDatabricksLakewatchRulesRulesTimerange" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

&datadatabrickslakewatchrules.DataDatabricksLakewatchRulesRulesTimerange {
	ExtendLookback: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerange.property.extendLookback">ExtendLookback</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#extend_lookback DataDatabricksLakewatchRules#extend_lookback}. |

---

##### `ExtendLookback`<sup>Optional</sup> <a name="ExtendLookback" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerange.property.extendLookback"></a>

```go
ExtendLookback *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#extend_lookback DataDatabricksLakewatchRules#extend_lookback}.

---

### DataDatabricksLakewatchRulesRulesUpdatedBy <a name="DataDatabricksLakewatchRulesRulesUpdatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

&datadatabrickslakewatchrules.DataDatabricksLakewatchRulesRulesUpdatedBy {
	DisplayName: *string,
	Email: *string,
	Id: *string,
	PrincipalType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#display_name DataDatabricksLakewatchRules#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#email DataDatabricksLakewatchRules#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#id DataDatabricksLakewatchRules#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy.property.principalType">PrincipalType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#principal_type DataDatabricksLakewatchRules#principal_type}. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#display_name DataDatabricksLakewatchRules#display_name}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#email DataDatabricksLakewatchRules#email}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#id DataDatabricksLakewatchRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrincipalType`<sup>Optional</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy.property.principalType"></a>

```go
PrincipalType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#principal_type DataDatabricksLakewatchRules#principal_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksLakewatchRulesProviderConfigOutputReference <a name="DataDatabricksLakewatchRulesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

datadatabrickslakewatchrules.NewDataDatabricksLakewatchRulesProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchRulesProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchRulesRulesBatchCustomOutputReference <a name="DataDatabricksLakewatchRulesRulesBatchCustomOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

datadatabrickslakewatchrules.NewDataDatabricksLakewatchRulesRulesBatchCustomOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchRulesRulesBatchCustomOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.resetOptions"></a>

```go
func ResetOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.notebookInput">NotebookInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.optionsInput">OptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.notebook">Notebook</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.options">Options</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NotebookInput`<sup>Optional</sup> <a name="NotebookInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.notebookInput"></a>

```go
func NotebookInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.optionsInput"></a>

```go
func OptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Notebook`<sup>Required</sup> <a name="Notebook" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.notebook"></a>

```go
func Notebook() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.options"></a>

```go
func Options() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchRulesRulesBatchOutputReference <a name="DataDatabricksLakewatchRulesRulesBatchOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

datadatabrickslakewatchrules.NewDataDatabricksLakewatchRulesRulesBatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchRulesRulesBatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.putCustom">PutCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.putSql">PutSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.resetCustom">ResetCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.resetSql">ResetSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.resetWarehouseId">ResetWarehouseId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustom` <a name="PutCustom" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.putCustom"></a>

```go
func PutCustom(value DataDatabricksLakewatchRulesRulesBatchCustom)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.putCustom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom">DataDatabricksLakewatchRulesRulesBatchCustom</a>

---

##### `PutSql` <a name="PutSql" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.putSql"></a>

```go
func PutSql(value DataDatabricksLakewatchRulesRulesBatchSql)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.putSql.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql">DataDatabricksLakewatchRulesRulesBatchSql</a>

---

##### `ResetCustom` <a name="ResetCustom" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.resetCustom"></a>

```go
func ResetCustom()
```

##### `ResetSql` <a name="ResetSql" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.resetSql"></a>

```go
func ResetSql()
```

##### `ResetWarehouseId` <a name="ResetWarehouseId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.resetWarehouseId"></a>

```go
func ResetWarehouseId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.custom">Custom</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference">DataDatabricksLakewatchRulesRulesBatchCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.sql">Sql</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference">DataDatabricksLakewatchRulesRulesBatchSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.customInput">CustomInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.sqlInput">SqlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.warehouseIdInput">WarehouseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.warehouseId">WarehouseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatch">DataDatabricksLakewatchRulesRulesBatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.custom"></a>

```go
func Custom() DataDatabricksLakewatchRulesRulesBatchCustomOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference">DataDatabricksLakewatchRulesRulesBatchCustomOutputReference</a>

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.sql"></a>

```go
func Sql() DataDatabricksLakewatchRulesRulesBatchSqlOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference">DataDatabricksLakewatchRulesRulesBatchSqlOutputReference</a>

---

##### `CustomInput`<sup>Optional</sup> <a name="CustomInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.customInput"></a>

```go
func CustomInput() interface{}
```

- *Type:* interface{}

---

##### `SqlInput`<sup>Optional</sup> <a name="SqlInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.sqlInput"></a>

```go
func SqlInput() interface{}
```

- *Type:* interface{}

---

##### `WarehouseIdInput`<sup>Optional</sup> <a name="WarehouseIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.warehouseIdInput"></a>

```go
func WarehouseIdInput() *string
```

- *Type:* *string

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.warehouseId"></a>

```go
func WarehouseId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchRulesRulesBatch
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatch">DataDatabricksLakewatchRulesRulesBatch</a>

---


### DataDatabricksLakewatchRulesRulesBatchSqlOutputReference <a name="DataDatabricksLakewatchRulesRulesBatchSqlOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

datadatabrickslakewatchrules.NewDataDatabricksLakewatchRulesRulesBatchSqlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchRulesRulesBatchSqlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.resetDefaultCatalogName">ResetDefaultCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.resetDefaultSchemaName">ResetDefaultSchemaName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultCatalogName` <a name="ResetDefaultCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.resetDefaultCatalogName"></a>

```go
func ResetDefaultCatalogName()
```

##### `ResetDefaultSchemaName` <a name="ResetDefaultSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.resetDefaultSchemaName"></a>

```go
func ResetDefaultSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.defaultCatalogNameInput">DefaultCatalogNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.defaultSchemaNameInput">DefaultSchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.defaultCatalogName">DefaultCatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.defaultSchemaName">DefaultSchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultCatalogNameInput`<sup>Optional</sup> <a name="DefaultCatalogNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.defaultCatalogNameInput"></a>

```go
func DefaultCatalogNameInput() *string
```

- *Type:* *string

---

##### `DefaultSchemaNameInput`<sup>Optional</sup> <a name="DefaultSchemaNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.defaultSchemaNameInput"></a>

```go
func DefaultSchemaNameInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `DefaultCatalogName`<sup>Required</sup> <a name="DefaultCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.defaultCatalogName"></a>

```go
func DefaultCatalogName() *string
```

- *Type:* *string

---

##### `DefaultSchemaName`<sup>Required</sup> <a name="DefaultSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.defaultSchemaName"></a>

```go
func DefaultSchemaName() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchRulesRulesCreatedByOutputReference <a name="DataDatabricksLakewatchRulesRulesCreatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

datadatabrickslakewatchrules.NewDataDatabricksLakewatchRulesRulesCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchRulesRulesCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resetPrincipalType">ResetPrincipalType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetPrincipalType` <a name="ResetPrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resetPrincipalType"></a>

```go
func ResetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.principalTypeInput">PrincipalTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.principalType">PrincipalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy">DataDatabricksLakewatchRulesRulesCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrincipalTypeInput`<sup>Optional</sup> <a name="PrincipalTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.principalTypeInput"></a>

```go
func PrincipalTypeInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.principalType"></a>

```go
func PrincipalType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchRulesRulesCreatedBy
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy">DataDatabricksLakewatchRulesRulesCreatedBy</a>

---


### DataDatabricksLakewatchRulesRulesList <a name="DataDatabricksLakewatchRulesRulesList" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

datadatabrickslakewatchrules.NewDataDatabricksLakewatchRulesRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksLakewatchRulesRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.get"></a>

```go
func Get(index *f64) DataDatabricksLakewatchRulesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchRulesRulesMitreList <a name="DataDatabricksLakewatchRulesRulesMitreList" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

datadatabrickslakewatchrules.NewDataDatabricksLakewatchRulesRulesMitreList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksLakewatchRulesRulesMitreList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.get"></a>

```go
func Get(index *f64) DataDatabricksLakewatchRulesRulesMitreOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchRulesRulesMitreOutputReference <a name="DataDatabricksLakewatchRulesRulesMitreOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

datadatabrickslakewatchrules.NewDataDatabricksLakewatchRulesRulesMitreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksLakewatchRulesRulesMitreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetSubTechnique">ResetSubTechnique</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetSubTechniqueId">ResetSubTechniqueId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetTactic">ResetTactic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetTaxonomy">ResetTaxonomy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetTechnique">ResetTechnique</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetTechniqueId">ResetTechniqueId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubTechnique` <a name="ResetSubTechnique" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetSubTechnique"></a>

```go
func ResetSubTechnique()
```

##### `ResetSubTechniqueId` <a name="ResetSubTechniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetSubTechniqueId"></a>

```go
func ResetSubTechniqueId()
```

##### `ResetTactic` <a name="ResetTactic" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetTactic"></a>

```go
func ResetTactic()
```

##### `ResetTaxonomy` <a name="ResetTaxonomy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetTaxonomy"></a>

```go
func ResetTaxonomy()
```

##### `ResetTechnique` <a name="ResetTechnique" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetTechnique"></a>

```go
func ResetTechnique()
```

##### `ResetTechniqueId` <a name="ResetTechniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetTechniqueId"></a>

```go
func ResetTechniqueId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.subTechniqueIdInput">SubTechniqueIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.subTechniqueInput">SubTechniqueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.tacticInput">TacticInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.taxonomyInput">TaxonomyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.techniqueIdInput">TechniqueIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.techniqueInput">TechniqueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.subTechnique">SubTechnique</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.subTechniqueId">SubTechniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.tactic">Tactic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.taxonomy">Taxonomy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.technique">Technique</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.techniqueId">TechniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre">DataDatabricksLakewatchRulesRulesMitre</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubTechniqueIdInput`<sup>Optional</sup> <a name="SubTechniqueIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.subTechniqueIdInput"></a>

```go
func SubTechniqueIdInput() *string
```

- *Type:* *string

---

##### `SubTechniqueInput`<sup>Optional</sup> <a name="SubTechniqueInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.subTechniqueInput"></a>

```go
func SubTechniqueInput() *string
```

- *Type:* *string

---

##### `TacticInput`<sup>Optional</sup> <a name="TacticInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.tacticInput"></a>

```go
func TacticInput() *string
```

- *Type:* *string

---

##### `TaxonomyInput`<sup>Optional</sup> <a name="TaxonomyInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.taxonomyInput"></a>

```go
func TaxonomyInput() *string
```

- *Type:* *string

---

##### `TechniqueIdInput`<sup>Optional</sup> <a name="TechniqueIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.techniqueIdInput"></a>

```go
func TechniqueIdInput() *string
```

- *Type:* *string

---

##### `TechniqueInput`<sup>Optional</sup> <a name="TechniqueInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.techniqueInput"></a>

```go
func TechniqueInput() *string
```

- *Type:* *string

---

##### `SubTechnique`<sup>Required</sup> <a name="SubTechnique" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.subTechnique"></a>

```go
func SubTechnique() *string
```

- *Type:* *string

---

##### `SubTechniqueId`<sup>Required</sup> <a name="SubTechniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.subTechniqueId"></a>

```go
func SubTechniqueId() *string
```

- *Type:* *string

---

##### `Tactic`<sup>Required</sup> <a name="Tactic" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.tactic"></a>

```go
func Tactic() *string
```

- *Type:* *string

---

##### `Taxonomy`<sup>Required</sup> <a name="Taxonomy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.taxonomy"></a>

```go
func Taxonomy() *string
```

- *Type:* *string

---

##### `Technique`<sup>Required</sup> <a name="Technique" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.technique"></a>

```go
func Technique() *string
```

- *Type:* *string

---

##### `TechniqueId`<sup>Required</sup> <a name="TechniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.techniqueId"></a>

```go
func TechniqueId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchRulesRulesMitre
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre">DataDatabricksLakewatchRulesRulesMitre</a>

---


### DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference <a name="DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

datadatabrickslakewatchrules.NewDataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPack">DataDatabricksLakewatchRulesRulesOriginalContentPack</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchRulesRulesOriginalContentPack
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPack">DataDatabricksLakewatchRulesRulesOriginalContentPack</a>

---


### DataDatabricksLakewatchRulesRulesOutputOutputReference <a name="DataDatabricksLakewatchRulesRulesOutputOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

datadatabrickslakewatchrules.NewDataDatabricksLakewatchRulesRulesOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchRulesRulesOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resetContext">ResetContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resetDefaultContext">ResetDefaultContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resetEventTimeColumn">ResetEventTimeColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resetSummary">ResetSummary</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContext` <a name="ResetContext" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resetContext"></a>

```go
func ResetContext()
```

##### `ResetDefaultContext` <a name="ResetDefaultContext" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resetDefaultContext"></a>

```go
func ResetDefaultContext()
```

##### `ResetEventTimeColumn` <a name="ResetEventTimeColumn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resetEventTimeColumn"></a>

```go
func ResetEventTimeColumn()
```

##### `ResetSummary` <a name="ResetSummary" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resetSummary"></a>

```go
func ResetSummary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.contextInput">ContextInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.defaultContextInput">DefaultContextInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.eventTimeColumnInput">EventTimeColumnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.summaryInput">SummaryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.context">Context</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.defaultContext">DefaultContext</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.eventTimeColumn">EventTimeColumn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.summary">Summary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput">DataDatabricksLakewatchRulesRulesOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContextInput`<sup>Optional</sup> <a name="ContextInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.contextInput"></a>

```go
func ContextInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DefaultContextInput`<sup>Optional</sup> <a name="DefaultContextInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.defaultContextInput"></a>

```go
func DefaultContextInput() interface{}
```

- *Type:* interface{}

---

##### `EventTimeColumnInput`<sup>Optional</sup> <a name="EventTimeColumnInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.eventTimeColumnInput"></a>

```go
func EventTimeColumnInput() *string
```

- *Type:* *string

---

##### `SummaryInput`<sup>Optional</sup> <a name="SummaryInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.summaryInput"></a>

```go
func SummaryInput() *string
```

- *Type:* *string

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.context"></a>

```go
func Context() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DefaultContext`<sup>Required</sup> <a name="DefaultContext" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.defaultContext"></a>

```go
func DefaultContext() interface{}
```

- *Type:* interface{}

---

##### `EventTimeColumn`<sup>Required</sup> <a name="EventTimeColumn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.eventTimeColumn"></a>

```go
func EventTimeColumn() *string
```

- *Type:* *string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.summary"></a>

```go
func Summary() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchRulesRulesOutput
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput">DataDatabricksLakewatchRulesRulesOutput</a>

---


### DataDatabricksLakewatchRulesRulesOutputReference <a name="DataDatabricksLakewatchRulesRulesOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

datadatabrickslakewatchrules.NewDataDatabricksLakewatchRulesRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksLakewatchRulesRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksLakewatchRulesRulesProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfig">DataDatabricksLakewatchRulesRulesProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.annotations">Annotations</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.batch">Batch</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference">DataDatabricksLakewatchRulesRulesBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.computeWorkspaceId">ComputeWorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.contentResourceId">ContentResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.createdBy">CreatedBy</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference">DataDatabricksLakewatchRulesRulesCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.deduplication">Deduplication</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.deduplicationTimeWindow">DeduplicationTimeWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.effectiveCatalogName">EffectiveCatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.effectiveRuleName">EffectiveRuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.effectiveRunAsPrincipal">EffectiveRunAsPrincipal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.effectiveSchemaName">EffectiveSchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.fidelity">Fidelity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.mitre">Mitre</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList">DataDatabricksLakewatchRulesRulesMitreList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.objective">Objective</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.originalContentPack">OriginalContentPack</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference">DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.output">Output</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference">DataDatabricksLakewatchRulesRulesOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.owner">Owner</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference">DataDatabricksLakewatchRulesRulesOwnerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference">DataDatabricksLakewatchRulesRulesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.references">References</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.ruleId">RuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.runAsPrincipal">RunAsPrincipal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.runbook">Runbook</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference">DataDatabricksLakewatchRulesRulesScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.status">Status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference">DataDatabricksLakewatchRulesRulesStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.suppressUntilTime">SuppressUntilTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.timerange">Timerange</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference">DataDatabricksLakewatchRulesRulesTimerangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.updatedBy">UpdatedBy</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference">DataDatabricksLakewatchRulesRulesUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRules">DataDatabricksLakewatchRulesRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.annotations"></a>

```go
func Annotations() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Batch`<sup>Required</sup> <a name="Batch" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.batch"></a>

```go
func Batch() DataDatabricksLakewatchRulesRulesBatchOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference">DataDatabricksLakewatchRulesRulesBatchOutputReference</a>

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `ComputeWorkspaceId`<sup>Required</sup> <a name="ComputeWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.computeWorkspaceId"></a>

```go
func ComputeWorkspaceId() *string
```

- *Type:* *string

---

##### `ContentResourceId`<sup>Required</sup> <a name="ContentResourceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.contentResourceId"></a>

```go
func ContentResourceId() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.createdBy"></a>

```go
func CreatedBy() DataDatabricksLakewatchRulesRulesCreatedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference">DataDatabricksLakewatchRulesRulesCreatedByOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Deduplication`<sup>Required</sup> <a name="Deduplication" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.deduplication"></a>

```go
func Deduplication() *string
```

- *Type:* *string

---

##### `DeduplicationTimeWindow`<sup>Required</sup> <a name="DeduplicationTimeWindow" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.deduplicationTimeWindow"></a>

```go
func DeduplicationTimeWindow() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EffectiveCatalogName`<sup>Required</sup> <a name="EffectiveCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.effectiveCatalogName"></a>

```go
func EffectiveCatalogName() *string
```

- *Type:* *string

---

##### `EffectiveRuleName`<sup>Required</sup> <a name="EffectiveRuleName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.effectiveRuleName"></a>

```go
func EffectiveRuleName() *string
```

- *Type:* *string

---

##### `EffectiveRunAsPrincipal`<sup>Required</sup> <a name="EffectiveRunAsPrincipal" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.effectiveRunAsPrincipal"></a>

```go
func EffectiveRunAsPrincipal() *string
```

- *Type:* *string

---

##### `EffectiveSchemaName`<sup>Required</sup> <a name="EffectiveSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.effectiveSchemaName"></a>

```go
func EffectiveSchemaName() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Fidelity`<sup>Required</sup> <a name="Fidelity" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.fidelity"></a>

```go
func Fidelity() *string
```

- *Type:* *string

---

##### `Mitre`<sup>Required</sup> <a name="Mitre" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.mitre"></a>

```go
func Mitre() DataDatabricksLakewatchRulesRulesMitreList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList">DataDatabricksLakewatchRulesRulesMitreList</a>

---

##### `Objective`<sup>Required</sup> <a name="Objective" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.objective"></a>

```go
func Objective() *string
```

- *Type:* *string

---

##### `OriginalContentPack`<sup>Required</sup> <a name="OriginalContentPack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.originalContentPack"></a>

```go
func OriginalContentPack() DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference">DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference</a>

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.output"></a>

```go
func Output() DataDatabricksLakewatchRulesRulesOutputOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference">DataDatabricksLakewatchRulesRulesOutputOutputReference</a>

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.owner"></a>

```go
func Owner() DataDatabricksLakewatchRulesRulesOwnerOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference">DataDatabricksLakewatchRulesRulesOwnerOutputReference</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksLakewatchRulesRulesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference">DataDatabricksLakewatchRulesRulesProviderConfigOutputReference</a>

---

##### `References`<sup>Required</sup> <a name="References" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.references"></a>

```go
func References() *[]*string
```

- *Type:* *[]*string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.ruleId"></a>

```go
func RuleId() *string
```

- *Type:* *string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

##### `RunAsPrincipal`<sup>Required</sup> <a name="RunAsPrincipal" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.runAsPrincipal"></a>

```go
func RunAsPrincipal() *string
```

- *Type:* *string

---

##### `Runbook`<sup>Required</sup> <a name="Runbook" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.runbook"></a>

```go
func Runbook() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.schedule"></a>

```go
func Schedule() DataDatabricksLakewatchRulesRulesScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference">DataDatabricksLakewatchRulesRulesScheduleOutputReference</a>

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.status"></a>

```go
func Status() DataDatabricksLakewatchRulesRulesStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference">DataDatabricksLakewatchRulesRulesStatusOutputReference</a>

---

##### `SuppressUntilTime`<sup>Required</sup> <a name="SuppressUntilTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.suppressUntilTime"></a>

```go
func SuppressUntilTime() *string
```

- *Type:* *string

---

##### `Timerange`<sup>Required</sup> <a name="Timerange" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.timerange"></a>

```go
func Timerange() DataDatabricksLakewatchRulesRulesTimerangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference">DataDatabricksLakewatchRulesRulesTimerangeOutputReference</a>

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.updatedBy"></a>

```go
func UpdatedBy() DataDatabricksLakewatchRulesRulesUpdatedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference">DataDatabricksLakewatchRulesRulesUpdatedByOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchRulesRules
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRules">DataDatabricksLakewatchRulesRules</a>

---


### DataDatabricksLakewatchRulesRulesOwnerOutputReference <a name="DataDatabricksLakewatchRulesRulesOwnerOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

datadatabrickslakewatchrules.NewDataDatabricksLakewatchRulesRulesOwnerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchRulesRulesOwnerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resetPrincipalType">ResetPrincipalType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetPrincipalType` <a name="ResetPrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resetPrincipalType"></a>

```go
func ResetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.principalTypeInput">PrincipalTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.principalType">PrincipalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner">DataDatabricksLakewatchRulesRulesOwner</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrincipalTypeInput`<sup>Optional</sup> <a name="PrincipalTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.principalTypeInput"></a>

```go
func PrincipalTypeInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.principalType"></a>

```go
func PrincipalType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchRulesRulesOwner
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner">DataDatabricksLakewatchRulesRulesOwner</a>

---


### DataDatabricksLakewatchRulesRulesProviderConfigOutputReference <a name="DataDatabricksLakewatchRulesRulesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

datadatabrickslakewatchrules.NewDataDatabricksLakewatchRulesRulesProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchRulesRulesProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchRulesRulesScheduleOutputReference <a name="DataDatabricksLakewatchRulesRulesScheduleOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

datadatabrickslakewatchrules.NewDataDatabricksLakewatchRulesRulesScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchRulesRulesScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resetAtLeastEvery">ResetAtLeastEvery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resetContinuous">ResetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resetCronExpression">ResetCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAtLeastEvery` <a name="ResetAtLeastEvery" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resetAtLeastEvery"></a>

```go
func ResetAtLeastEvery()
```

##### `ResetContinuous` <a name="ResetContinuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resetContinuous"></a>

```go
func ResetContinuous()
```

##### `ResetCronExpression` <a name="ResetCronExpression" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resetCronExpression"></a>

```go
func ResetCronExpression()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.atLeastEveryInput">AtLeastEveryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.continuousInput">ContinuousInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.cronExpressionInput">CronExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.atLeastEvery">AtLeastEvery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.continuous">Continuous</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.cronExpression">CronExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule">DataDatabricksLakewatchRulesRulesSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AtLeastEveryInput`<sup>Optional</sup> <a name="AtLeastEveryInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.atLeastEveryInput"></a>

```go
func AtLeastEveryInput() *string
```

- *Type:* *string

---

##### `ContinuousInput`<sup>Optional</sup> <a name="ContinuousInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.continuousInput"></a>

```go
func ContinuousInput() interface{}
```

- *Type:* interface{}

---

##### `CronExpressionInput`<sup>Optional</sup> <a name="CronExpressionInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.cronExpressionInput"></a>

```go
func CronExpressionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AtLeastEvery`<sup>Required</sup> <a name="AtLeastEvery" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.atLeastEvery"></a>

```go
func AtLeastEvery() *string
```

- *Type:* *string

---

##### `Continuous`<sup>Required</sup> <a name="Continuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.continuous"></a>

```go
func Continuous() interface{}
```

- *Type:* interface{}

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.cronExpression"></a>

```go
func CronExpression() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchRulesRulesSchedule
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule">DataDatabricksLakewatchRulesRulesSchedule</a>

---


### DataDatabricksLakewatchRulesRulesStatusOutputReference <a name="DataDatabricksLakewatchRulesRulesStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

datadatabrickslakewatchrules.NewDataDatabricksLakewatchRulesRulesStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchRulesRulesStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.jobId">JobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.lastCompleteTime">LastCompleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.lastErrorMessage">LastErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.lastStartTime">LastStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.lastStatusChangeTime">LastStatusChangeTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.lifecycleState">LifecycleState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.pipelineId">PipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.runState">RunState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatus">DataDatabricksLakewatchRulesRulesStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.jobId"></a>

```go
func JobId() *string
```

- *Type:* *string

---

##### `LastCompleteTime`<sup>Required</sup> <a name="LastCompleteTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.lastCompleteTime"></a>

```go
func LastCompleteTime() *string
```

- *Type:* *string

---

##### `LastErrorMessage`<sup>Required</sup> <a name="LastErrorMessage" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.lastErrorMessage"></a>

```go
func LastErrorMessage() *string
```

- *Type:* *string

---

##### `LastStartTime`<sup>Required</sup> <a name="LastStartTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.lastStartTime"></a>

```go
func LastStartTime() *string
```

- *Type:* *string

---

##### `LastStatusChangeTime`<sup>Required</sup> <a name="LastStatusChangeTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.lastStatusChangeTime"></a>

```go
func LastStatusChangeTime() *string
```

- *Type:* *string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.lifecycleState"></a>

```go
func LifecycleState() *string
```

- *Type:* *string

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.pipelineId"></a>

```go
func PipelineId() *string
```

- *Type:* *string

---

##### `RunState`<sup>Required</sup> <a name="RunState" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.runState"></a>

```go
func RunState() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchRulesRulesStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatus">DataDatabricksLakewatchRulesRulesStatus</a>

---


### DataDatabricksLakewatchRulesRulesTimerangeOutputReference <a name="DataDatabricksLakewatchRulesRulesTimerangeOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

datadatabrickslakewatchrules.NewDataDatabricksLakewatchRulesRulesTimerangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchRulesRulesTimerangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.resetExtendLookback">ResetExtendLookback</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExtendLookback` <a name="ResetExtendLookback" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.resetExtendLookback"></a>

```go
func ResetExtendLookback()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.property.extendLookbackInput">ExtendLookbackInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.property.extendLookback">ExtendLookback</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerange">DataDatabricksLakewatchRulesRulesTimerange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExtendLookbackInput`<sup>Optional</sup> <a name="ExtendLookbackInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.property.extendLookbackInput"></a>

```go
func ExtendLookbackInput() *string
```

- *Type:* *string

---

##### `ExtendLookback`<sup>Required</sup> <a name="ExtendLookback" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.property.extendLookback"></a>

```go
func ExtendLookback() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchRulesRulesTimerange
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerange">DataDatabricksLakewatchRulesRulesTimerange</a>

---


### DataDatabricksLakewatchRulesRulesUpdatedByOutputReference <a name="DataDatabricksLakewatchRulesRulesUpdatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchrules"

datadatabrickslakewatchrules.NewDataDatabricksLakewatchRulesRulesUpdatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchRulesRulesUpdatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resetPrincipalType">ResetPrincipalType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetPrincipalType` <a name="ResetPrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resetPrincipalType"></a>

```go
func ResetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.principalTypeInput">PrincipalTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.principalType">PrincipalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy">DataDatabricksLakewatchRulesRulesUpdatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrincipalTypeInput`<sup>Optional</sup> <a name="PrincipalTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.principalTypeInput"></a>

```go
func PrincipalTypeInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.principalType"></a>

```go
func PrincipalType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchRulesRulesUpdatedBy
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy">DataDatabricksLakewatchRulesRulesUpdatedBy</a>

---



