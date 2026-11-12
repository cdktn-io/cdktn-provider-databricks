# `dataDatabricksLakewatchDatasourceConfig` Submodule <a name="`dataDatabricksLakewatchDatasourceConfig` Submodule" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksLakewatchDatasourceConfigA <a name="DataDatabricksLakewatchDatasourceConfigA" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config databricks_lakewatch_datasource_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasourceconfig"

datadatabrickslakewatchdatasourceconfig.NewDataDatabricksLakewatchDatasourceConfigA(scope Construct, id *string, config DataDatabricksLakewatchDatasourceConfigAConfig) DataDatabricksLakewatchDatasourceConfigA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig">DataDatabricksLakewatchDatasourceConfigAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig">DataDatabricksLakewatchDatasourceConfigAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksLakewatchDatasourceConfigProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfig">DataDatabricksLakewatchDatasourceConfigProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksLakewatchDatasourceConfigA resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasourceconfig"

datadatabrickslakewatchdatasourceconfig.DataDatabricksLakewatchDatasourceConfigA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasourceconfig"

datadatabrickslakewatchdatasourceconfig.DataDatabricksLakewatchDatasourceConfigA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasourceconfig"

datadatabrickslakewatchdatasourceconfig.DataDatabricksLakewatchDatasourceConfigA_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasourceconfig"

datadatabrickslakewatchdatasourceconfig.DataDatabricksLakewatchDatasourceConfigA_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksLakewatchDatasourceConfigA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksLakewatchDatasourceConfigA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksLakewatchDatasourceConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksLakewatchDatasourceConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.defaultComputeMode">DefaultComputeMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.defaultFolder">DefaultFolder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.effectiveDefaultFolder">EffectiveDefaultFolder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference">DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.updatedBy">UpdatedBy</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference">DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `DefaultComputeMode`<sup>Required</sup> <a name="DefaultComputeMode" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.defaultComputeMode"></a>

```go
func DefaultComputeMode() *string
```

- *Type:* *string

---

##### `DefaultFolder`<sup>Required</sup> <a name="DefaultFolder" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.defaultFolder"></a>

```go
func DefaultFolder() *string
```

- *Type:* *string

---

##### `EffectiveDefaultFolder`<sup>Required</sup> <a name="EffectiveDefaultFolder" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.effectiveDefaultFolder"></a>

```go
func EffectiveDefaultFolder() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference">DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference</a>

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.updatedBy"></a>

```go
func UpdatedBy() DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference">DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksLakewatchDatasourceConfigAConfig <a name="DataDatabricksLakewatchDatasourceConfigAConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasourceconfig"

&datadatabrickslakewatchdatasourceconfig.DataDatabricksLakewatchDatasourceConfigAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#name DataDatabricksLakewatchDatasourceConfigA#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfig">DataDatabricksLakewatchDatasourceConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#provider_config DataDatabricksLakewatchDatasourceConfigA#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#name DataDatabricksLakewatchDatasourceConfigA#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksLakewatchDatasourceConfigProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfig">DataDatabricksLakewatchDatasourceConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#provider_config DataDatabricksLakewatchDatasourceConfigA#provider_config}.

---

### DataDatabricksLakewatchDatasourceConfigProviderConfig <a name="DataDatabricksLakewatchDatasourceConfigProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasourceconfig"

&datadatabrickslakewatchdatasourceconfig.DataDatabricksLakewatchDatasourceConfigProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#workspace_id DataDatabricksLakewatchDatasourceConfigA#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#workspace_id DataDatabricksLakewatchDatasourceConfigA#workspace_id}.

---

### DataDatabricksLakewatchDatasourceConfigUpdatedBy <a name="DataDatabricksLakewatchDatasourceConfigUpdatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedBy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasourceconfig"

&datadatabrickslakewatchdatasourceconfig.DataDatabricksLakewatchDatasourceConfigUpdatedBy {
	DisplayName: *string,
	Email: *string,
	Id: *string,
	PrincipalType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedBy.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#display_name DataDatabricksLakewatchDatasourceConfigA#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedBy.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#email DataDatabricksLakewatchDatasourceConfigA#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedBy.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#id DataDatabricksLakewatchDatasourceConfigA#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedBy.property.principalType">PrincipalType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#principal_type DataDatabricksLakewatchDatasourceConfigA#principal_type}. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedBy.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#display_name DataDatabricksLakewatchDatasourceConfigA#display_name}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedBy.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#email DataDatabricksLakewatchDatasourceConfigA#email}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedBy.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#id DataDatabricksLakewatchDatasourceConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrincipalType`<sup>Optional</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedBy.property.principalType"></a>

```go
PrincipalType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#principal_type DataDatabricksLakewatchDatasourceConfigA#principal_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference <a name="DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasourceconfig"

datadatabrickslakewatchdatasourceconfig.NewDataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference <a name="DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchdatasourceconfig"

datadatabrickslakewatchdatasourceconfig.NewDataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.resetPrincipalType">ResetPrincipalType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetPrincipalType` <a name="ResetPrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.resetPrincipalType"></a>

```go
func ResetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.principalTypeInput">PrincipalTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.principalType">PrincipalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedBy">DataDatabricksLakewatchDatasourceConfigUpdatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrincipalTypeInput`<sup>Optional</sup> <a name="PrincipalTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.principalTypeInput"></a>

```go
func PrincipalTypeInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.principalType"></a>

```go
func PrincipalType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchDatasourceConfigUpdatedBy
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedBy">DataDatabricksLakewatchDatasourceConfigUpdatedBy</a>

---



