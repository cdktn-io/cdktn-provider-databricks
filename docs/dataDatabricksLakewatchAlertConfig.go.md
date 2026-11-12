# `dataDatabricksLakewatchAlertConfig` Submodule <a name="`dataDatabricksLakewatchAlertConfig` Submodule" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksLakewatchAlertConfig <a name="DataDatabricksLakewatchAlertConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config databricks_lakewatch_alert_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

datadatabrickslakewatchalertconfig.NewDataDatabricksLakewatchAlertConfig(scope Construct, id *string, config DataDatabricksLakewatchAlertConfigConfig) DataDatabricksLakewatchAlertConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig">DataDatabricksLakewatchAlertConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig">DataDatabricksLakewatchAlertConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksLakewatchAlertConfigProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig">DataDatabricksLakewatchAlertConfigProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksLakewatchAlertConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

datadatabrickslakewatchalertconfig.DataDatabricksLakewatchAlertConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

datadatabrickslakewatchalertconfig.DataDatabricksLakewatchAlertConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

datadatabrickslakewatchalertconfig.DataDatabricksLakewatchAlertConfig_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

datadatabrickslakewatchalertconfig.DataDatabricksLakewatchAlertConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksLakewatchAlertConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksLakewatchAlertConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksLakewatchAlertConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksLakewatchAlertConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.defaultSecurityAlertCollationWindow">DefaultSecurityAlertCollationWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.defaultSystemAlertCollationWindow">DefaultSystemAlertCollationWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.effectiveDefaultSecurityAlertCollationWindow">EffectiveDefaultSecurityAlertCollationWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.effectiveDefaultSystemAlertCollationWindow">EffectiveDefaultSystemAlertCollationWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference">DataDatabricksLakewatchAlertConfigProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.securityAlertExportConfig">SecurityAlertExportConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.systemAlertExportConfig">SystemAlertExportConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.updatedBy">UpdatedBy</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference">DataDatabricksLakewatchAlertConfigUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `DefaultSecurityAlertCollationWindow`<sup>Required</sup> <a name="DefaultSecurityAlertCollationWindow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.defaultSecurityAlertCollationWindow"></a>

```go
func DefaultSecurityAlertCollationWindow() *string
```

- *Type:* *string

---

##### `DefaultSystemAlertCollationWindow`<sup>Required</sup> <a name="DefaultSystemAlertCollationWindow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.defaultSystemAlertCollationWindow"></a>

```go
func DefaultSystemAlertCollationWindow() *string
```

- *Type:* *string

---

##### `EffectiveDefaultSecurityAlertCollationWindow`<sup>Required</sup> <a name="EffectiveDefaultSecurityAlertCollationWindow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.effectiveDefaultSecurityAlertCollationWindow"></a>

```go
func EffectiveDefaultSecurityAlertCollationWindow() *string
```

- *Type:* *string

---

##### `EffectiveDefaultSystemAlertCollationWindow`<sup>Required</sup> <a name="EffectiveDefaultSystemAlertCollationWindow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.effectiveDefaultSystemAlertCollationWindow"></a>

```go
func EffectiveDefaultSystemAlertCollationWindow() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksLakewatchAlertConfigProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference">DataDatabricksLakewatchAlertConfigProviderConfigOutputReference</a>

---

##### `SecurityAlertExportConfig`<sup>Required</sup> <a name="SecurityAlertExportConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.securityAlertExportConfig"></a>

```go
func SecurityAlertExportConfig() DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference</a>

---

##### `SystemAlertExportConfig`<sup>Required</sup> <a name="SystemAlertExportConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.systemAlertExportConfig"></a>

```go
func SystemAlertExportConfig() DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference</a>

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.updatedBy"></a>

```go
func UpdatedBy() DataDatabricksLakewatchAlertConfigUpdatedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference">DataDatabricksLakewatchAlertConfigUpdatedByOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksLakewatchAlertConfigConfig <a name="DataDatabricksLakewatchAlertConfigConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

&datadatabrickslakewatchalertconfig.DataDatabricksLakewatchAlertConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#name DataDatabricksLakewatchAlertConfig#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig">DataDatabricksLakewatchAlertConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#provider_config DataDatabricksLakewatchAlertConfig#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#name DataDatabricksLakewatchAlertConfig#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksLakewatchAlertConfigProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig">DataDatabricksLakewatchAlertConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#provider_config DataDatabricksLakewatchAlertConfig#provider_config}.

---

### DataDatabricksLakewatchAlertConfigProviderConfig <a name="DataDatabricksLakewatchAlertConfigProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

&datadatabrickslakewatchalertconfig.DataDatabricksLakewatchAlertConfigProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#workspace_id DataDatabricksLakewatchAlertConfig#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#workspace_id DataDatabricksLakewatchAlertConfig#workspace_id}.

---

### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

&datadatabrickslakewatchalertconfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig {
	Enabled: interface{},
	Jira: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira,
	ServiceNow: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow,
	Slack: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack,
	Tines: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines,
	Webhook: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook,
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#enabled DataDatabricksLakewatchAlertConfig#enabled}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.jira">Jira</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#jira DataDatabricksLakewatchAlertConfig#jira}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#service_now DataDatabricksLakewatchAlertConfig#service_now}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.slack">Slack</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#slack DataDatabricksLakewatchAlertConfig#slack}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.tines">Tines</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#tines DataDatabricksLakewatchAlertConfig#tines}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.webhook">Webhook</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook DataDatabricksLakewatchAlertConfig#webhook}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#workspace_id DataDatabricksLakewatchAlertConfig#workspace_id}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#enabled DataDatabricksLakewatchAlertConfig#enabled}.

---

##### `Jira`<sup>Optional</sup> <a name="Jira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.jira"></a>

```go
Jira DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#jira DataDatabricksLakewatchAlertConfig#jira}.

---

##### `ServiceNow`<sup>Optional</sup> <a name="ServiceNow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.serviceNow"></a>

```go
ServiceNow DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#service_now DataDatabricksLakewatchAlertConfig#service_now}.

---

##### `Slack`<sup>Optional</sup> <a name="Slack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.slack"></a>

```go
Slack DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#slack DataDatabricksLakewatchAlertConfig#slack}.

---

##### `Tines`<sup>Optional</sup> <a name="Tines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.tines"></a>

```go
Tines DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#tines DataDatabricksLakewatchAlertConfig#tines}.

---

##### `Webhook`<sup>Optional</sup> <a name="Webhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.webhook"></a>

```go
Webhook DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook DataDatabricksLakewatchAlertConfig#webhook}.

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#workspace_id DataDatabricksLakewatchAlertConfig#workspace_id}.

---

### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

&datadatabrickslakewatchalertconfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira {
	ApiTokenUcSecret: *string,
	DefaultIssueType: *string,
	InstanceUrl: *string,
	ProjectKey: *string,
	UserEmail: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.apiTokenUcSecret">ApiTokenUcSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#api_token_uc_secret DataDatabricksLakewatchAlertConfig#api_token_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.defaultIssueType">DefaultIssueType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#default_issue_type DataDatabricksLakewatchAlertConfig#default_issue_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.instanceUrl">InstanceUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_url DataDatabricksLakewatchAlertConfig#instance_url}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.projectKey">ProjectKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#project_key DataDatabricksLakewatchAlertConfig#project_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.userEmail">UserEmail</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#user_email DataDatabricksLakewatchAlertConfig#user_email}. |

---

##### `ApiTokenUcSecret`<sup>Required</sup> <a name="ApiTokenUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.apiTokenUcSecret"></a>

```go
ApiTokenUcSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#api_token_uc_secret DataDatabricksLakewatchAlertConfig#api_token_uc_secret}.

---

##### `DefaultIssueType`<sup>Required</sup> <a name="DefaultIssueType" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.defaultIssueType"></a>

```go
DefaultIssueType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#default_issue_type DataDatabricksLakewatchAlertConfig#default_issue_type}.

---

##### `InstanceUrl`<sup>Required</sup> <a name="InstanceUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.instanceUrl"></a>

```go
InstanceUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_url DataDatabricksLakewatchAlertConfig#instance_url}.

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.projectKey"></a>

```go
ProjectKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#project_key DataDatabricksLakewatchAlertConfig#project_key}.

---

##### `UserEmail`<sup>Required</sup> <a name="UserEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.userEmail"></a>

```go
UserEmail *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#user_email DataDatabricksLakewatchAlertConfig#user_email}.

---

### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

&datadatabrickslakewatchalertconfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow {
	ClientId: *string,
	ClientSecretUcSecret: *string,
	InstanceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_id DataDatabricksLakewatchAlertConfig#client_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.clientSecretUcSecret">ClientSecretUcSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_secret_uc_secret DataDatabricksLakewatchAlertConfig#client_secret_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.instanceId">InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_id DataDatabricksLakewatchAlertConfig#instance_id}. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_id DataDatabricksLakewatchAlertConfig#client_id}.

---

##### `ClientSecretUcSecret`<sup>Required</sup> <a name="ClientSecretUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.clientSecretUcSecret"></a>

```go
ClientSecretUcSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_secret_uc_secret DataDatabricksLakewatchAlertConfig#client_secret_uc_secret}.

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_id DataDatabricksLakewatchAlertConfig#instance_id}.

---

### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

&datadatabrickslakewatchalertconfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack {
	BotTokenUcSecret: *string,
	Channel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack.property.botTokenUcSecret">BotTokenUcSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#bot_token_uc_secret DataDatabricksLakewatchAlertConfig#bot_token_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack.property.channel">Channel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#channel DataDatabricksLakewatchAlertConfig#channel}. |

---

##### `BotTokenUcSecret`<sup>Required</sup> <a name="BotTokenUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack.property.botTokenUcSecret"></a>

```go
BotTokenUcSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#bot_token_uc_secret DataDatabricksLakewatchAlertConfig#bot_token_uc_secret}.

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack.property.channel"></a>

```go
Channel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#channel DataDatabricksLakewatchAlertConfig#channel}.

---

### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

&datadatabrickslakewatchalertconfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines {
	WebhookSecretUcSecret: *string,
	WebhookUri: *string,
	ExportUpdates: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines.property.webhookSecretUcSecret">WebhookSecretUcSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_secret_uc_secret DataDatabricksLakewatchAlertConfig#webhook_secret_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines.property.webhookUri">WebhookUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_uri DataDatabricksLakewatchAlertConfig#webhook_uri}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines.property.exportUpdates">ExportUpdates</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}. |

---

##### `WebhookSecretUcSecret`<sup>Required</sup> <a name="WebhookSecretUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines.property.webhookSecretUcSecret"></a>

```go
WebhookSecretUcSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_secret_uc_secret DataDatabricksLakewatchAlertConfig#webhook_secret_uc_secret}.

---

##### `WebhookUri`<sup>Required</sup> <a name="WebhookUri" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines.property.webhookUri"></a>

```go
WebhookUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_uri DataDatabricksLakewatchAlertConfig#webhook_uri}.

---

##### `ExportUpdates`<sup>Optional</sup> <a name="ExportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines.property.exportUpdates"></a>

```go
ExportUpdates interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}.

---

### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

&datadatabrickslakewatchalertconfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook {
	ExportUpdates: interface{},
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook.property.exportUpdates">ExportUpdates</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#url DataDatabricksLakewatchAlertConfig#url}. |

---

##### `ExportUpdates`<sup>Optional</sup> <a name="ExportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook.property.exportUpdates"></a>

```go
ExportUpdates interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#url DataDatabricksLakewatchAlertConfig#url}.

---

### DataDatabricksLakewatchAlertConfigSystemAlertExportConfig <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

&datadatabrickslakewatchalertconfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig {
	Enabled: interface{},
	Jira: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira,
	ServiceNow: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow,
	Slack: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack,
	Tines: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines,
	Webhook: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook,
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#enabled DataDatabricksLakewatchAlertConfig#enabled}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.jira">Jira</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#jira DataDatabricksLakewatchAlertConfig#jira}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#service_now DataDatabricksLakewatchAlertConfig#service_now}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.slack">Slack</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#slack DataDatabricksLakewatchAlertConfig#slack}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.tines">Tines</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#tines DataDatabricksLakewatchAlertConfig#tines}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.webhook">Webhook</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook DataDatabricksLakewatchAlertConfig#webhook}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#workspace_id DataDatabricksLakewatchAlertConfig#workspace_id}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#enabled DataDatabricksLakewatchAlertConfig#enabled}.

---

##### `Jira`<sup>Optional</sup> <a name="Jira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.jira"></a>

```go
Jira DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#jira DataDatabricksLakewatchAlertConfig#jira}.

---

##### `ServiceNow`<sup>Optional</sup> <a name="ServiceNow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.serviceNow"></a>

```go
ServiceNow DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#service_now DataDatabricksLakewatchAlertConfig#service_now}.

---

##### `Slack`<sup>Optional</sup> <a name="Slack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.slack"></a>

```go
Slack DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#slack DataDatabricksLakewatchAlertConfig#slack}.

---

##### `Tines`<sup>Optional</sup> <a name="Tines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.tines"></a>

```go
Tines DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#tines DataDatabricksLakewatchAlertConfig#tines}.

---

##### `Webhook`<sup>Optional</sup> <a name="Webhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.webhook"></a>

```go
Webhook DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook DataDatabricksLakewatchAlertConfig#webhook}.

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#workspace_id DataDatabricksLakewatchAlertConfig#workspace_id}.

---

### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

&datadatabrickslakewatchalertconfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira {
	ApiTokenUcSecret: *string,
	DefaultIssueType: *string,
	InstanceUrl: *string,
	ProjectKey: *string,
	UserEmail: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.apiTokenUcSecret">ApiTokenUcSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#api_token_uc_secret DataDatabricksLakewatchAlertConfig#api_token_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.defaultIssueType">DefaultIssueType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#default_issue_type DataDatabricksLakewatchAlertConfig#default_issue_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.instanceUrl">InstanceUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_url DataDatabricksLakewatchAlertConfig#instance_url}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.projectKey">ProjectKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#project_key DataDatabricksLakewatchAlertConfig#project_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.userEmail">UserEmail</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#user_email DataDatabricksLakewatchAlertConfig#user_email}. |

---

##### `ApiTokenUcSecret`<sup>Required</sup> <a name="ApiTokenUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.apiTokenUcSecret"></a>

```go
ApiTokenUcSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#api_token_uc_secret DataDatabricksLakewatchAlertConfig#api_token_uc_secret}.

---

##### `DefaultIssueType`<sup>Required</sup> <a name="DefaultIssueType" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.defaultIssueType"></a>

```go
DefaultIssueType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#default_issue_type DataDatabricksLakewatchAlertConfig#default_issue_type}.

---

##### `InstanceUrl`<sup>Required</sup> <a name="InstanceUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.instanceUrl"></a>

```go
InstanceUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_url DataDatabricksLakewatchAlertConfig#instance_url}.

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.projectKey"></a>

```go
ProjectKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#project_key DataDatabricksLakewatchAlertConfig#project_key}.

---

##### `UserEmail`<sup>Required</sup> <a name="UserEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.userEmail"></a>

```go
UserEmail *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#user_email DataDatabricksLakewatchAlertConfig#user_email}.

---

### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

&datadatabrickslakewatchalertconfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow {
	ClientId: *string,
	ClientSecretUcSecret: *string,
	InstanceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_id DataDatabricksLakewatchAlertConfig#client_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow.property.clientSecretUcSecret">ClientSecretUcSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_secret_uc_secret DataDatabricksLakewatchAlertConfig#client_secret_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow.property.instanceId">InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_id DataDatabricksLakewatchAlertConfig#instance_id}. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_id DataDatabricksLakewatchAlertConfig#client_id}.

---

##### `ClientSecretUcSecret`<sup>Required</sup> <a name="ClientSecretUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow.property.clientSecretUcSecret"></a>

```go
ClientSecretUcSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_secret_uc_secret DataDatabricksLakewatchAlertConfig#client_secret_uc_secret}.

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_id DataDatabricksLakewatchAlertConfig#instance_id}.

---

### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

&datadatabrickslakewatchalertconfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack {
	BotTokenUcSecret: *string,
	Channel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack.property.botTokenUcSecret">BotTokenUcSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#bot_token_uc_secret DataDatabricksLakewatchAlertConfig#bot_token_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack.property.channel">Channel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#channel DataDatabricksLakewatchAlertConfig#channel}. |

---

##### `BotTokenUcSecret`<sup>Required</sup> <a name="BotTokenUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack.property.botTokenUcSecret"></a>

```go
BotTokenUcSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#bot_token_uc_secret DataDatabricksLakewatchAlertConfig#bot_token_uc_secret}.

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack.property.channel"></a>

```go
Channel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#channel DataDatabricksLakewatchAlertConfig#channel}.

---

### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

&datadatabrickslakewatchalertconfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines {
	WebhookSecretUcSecret: *string,
	WebhookUri: *string,
	ExportUpdates: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines.property.webhookSecretUcSecret">WebhookSecretUcSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_secret_uc_secret DataDatabricksLakewatchAlertConfig#webhook_secret_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines.property.webhookUri">WebhookUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_uri DataDatabricksLakewatchAlertConfig#webhook_uri}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines.property.exportUpdates">ExportUpdates</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}. |

---

##### `WebhookSecretUcSecret`<sup>Required</sup> <a name="WebhookSecretUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines.property.webhookSecretUcSecret"></a>

```go
WebhookSecretUcSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_secret_uc_secret DataDatabricksLakewatchAlertConfig#webhook_secret_uc_secret}.

---

##### `WebhookUri`<sup>Required</sup> <a name="WebhookUri" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines.property.webhookUri"></a>

```go
WebhookUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_uri DataDatabricksLakewatchAlertConfig#webhook_uri}.

---

##### `ExportUpdates`<sup>Optional</sup> <a name="ExportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines.property.exportUpdates"></a>

```go
ExportUpdates interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}.

---

### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

&datadatabrickslakewatchalertconfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook {
	ExportUpdates: interface{},
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook.property.exportUpdates">ExportUpdates</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#url DataDatabricksLakewatchAlertConfig#url}. |

---

##### `ExportUpdates`<sup>Optional</sup> <a name="ExportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook.property.exportUpdates"></a>

```go
ExportUpdates interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#url DataDatabricksLakewatchAlertConfig#url}.

---

### DataDatabricksLakewatchAlertConfigUpdatedBy <a name="DataDatabricksLakewatchAlertConfigUpdatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

&datadatabrickslakewatchalertconfig.DataDatabricksLakewatchAlertConfigUpdatedBy {
	DisplayName: *string,
	Email: *string,
	Id: *string,
	PrincipalType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#display_name DataDatabricksLakewatchAlertConfig#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#email DataDatabricksLakewatchAlertConfig#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#id DataDatabricksLakewatchAlertConfig#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.property.principalType">PrincipalType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#principal_type DataDatabricksLakewatchAlertConfig#principal_type}. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#display_name DataDatabricksLakewatchAlertConfig#display_name}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#email DataDatabricksLakewatchAlertConfig#email}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#id DataDatabricksLakewatchAlertConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrincipalType`<sup>Optional</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.property.principalType"></a>

```go
PrincipalType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#principal_type DataDatabricksLakewatchAlertConfig#principal_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksLakewatchAlertConfigProviderConfigOutputReference <a name="DataDatabricksLakewatchAlertConfigProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

datadatabrickslakewatchalertconfig.NewDataDatabricksLakewatchAlertConfigProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchAlertConfigProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

datadatabrickslakewatchalertconfig.NewDataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.apiTokenUcSecretInput">ApiTokenUcSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.defaultIssueTypeInput">DefaultIssueTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.instanceUrlInput">InstanceUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.projectKeyInput">ProjectKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.userEmailInput">UserEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.apiTokenUcSecret">ApiTokenUcSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.defaultIssueType">DefaultIssueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.instanceUrl">InstanceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.projectKey">ProjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.userEmail">UserEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiTokenUcSecretInput`<sup>Optional</sup> <a name="ApiTokenUcSecretInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.apiTokenUcSecretInput"></a>

```go
func ApiTokenUcSecretInput() *string
```

- *Type:* *string

---

##### `DefaultIssueTypeInput`<sup>Optional</sup> <a name="DefaultIssueTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.defaultIssueTypeInput"></a>

```go
func DefaultIssueTypeInput() *string
```

- *Type:* *string

---

##### `InstanceUrlInput`<sup>Optional</sup> <a name="InstanceUrlInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.instanceUrlInput"></a>

```go
func InstanceUrlInput() *string
```

- *Type:* *string

---

##### `ProjectKeyInput`<sup>Optional</sup> <a name="ProjectKeyInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.projectKeyInput"></a>

```go
func ProjectKeyInput() *string
```

- *Type:* *string

---

##### `UserEmailInput`<sup>Optional</sup> <a name="UserEmailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.userEmailInput"></a>

```go
func UserEmailInput() *string
```

- *Type:* *string

---

##### `ApiTokenUcSecret`<sup>Required</sup> <a name="ApiTokenUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.apiTokenUcSecret"></a>

```go
func ApiTokenUcSecret() *string
```

- *Type:* *string

---

##### `DefaultIssueType`<sup>Required</sup> <a name="DefaultIssueType" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.defaultIssueType"></a>

```go
func DefaultIssueType() *string
```

- *Type:* *string

---

##### `InstanceUrl`<sup>Required</sup> <a name="InstanceUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.instanceUrl"></a>

```go
func InstanceUrl() *string
```

- *Type:* *string

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.projectKey"></a>

```go
func ProjectKey() *string
```

- *Type:* *string

---

##### `UserEmail`<sup>Required</sup> <a name="UserEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.userEmail"></a>

```go
func UserEmail() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

datadatabrickslakewatchalertconfig.NewDataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putJira">PutJira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putServiceNow">PutServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putSlack">PutSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putTines">PutTines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putWebhook">PutWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetJira">ResetJira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetServiceNow">ResetServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetSlack">ResetSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetTines">ResetTines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetWebhook">ResetWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJira` <a name="PutJira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putJira"></a>

```go
func PutJira(value DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putJira.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira</a>

---

##### `PutServiceNow` <a name="PutServiceNow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putServiceNow"></a>

```go
func PutServiceNow(value DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putServiceNow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow</a>

---

##### `PutSlack` <a name="PutSlack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putSlack"></a>

```go
func PutSlack(value DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putSlack.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack</a>

---

##### `PutTines` <a name="PutTines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putTines"></a>

```go
func PutTines(value DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putTines.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines</a>

---

##### `PutWebhook` <a name="PutWebhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putWebhook"></a>

```go
func PutWebhook(value DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putWebhook.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetJira` <a name="ResetJira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetJira"></a>

```go
func ResetJira()
```

##### `ResetServiceNow` <a name="ResetServiceNow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetServiceNow"></a>

```go
func ResetServiceNow()
```

##### `ResetSlack` <a name="ResetSlack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetSlack"></a>

```go
func ResetSlack()
```

##### `ResetTines` <a name="ResetTines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetTines"></a>

```go
func ResetTines()
```

##### `ResetWebhook` <a name="ResetWebhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetWebhook"></a>

```go
func ResetWebhook()
```

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.jira">Jira</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.slack">Slack</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.tines">Tines</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.webhook">Webhook</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.jiraInput">JiraInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.serviceNowInput">ServiceNowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.slackInput">SlackInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.tinesInput">TinesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.webhookInput">WebhookInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Jira`<sup>Required</sup> <a name="Jira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.jira"></a>

```go
func Jira() DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference</a>

---

##### `ServiceNow`<sup>Required</sup> <a name="ServiceNow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.serviceNow"></a>

```go
func ServiceNow() DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference</a>

---

##### `Slack`<sup>Required</sup> <a name="Slack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.slack"></a>

```go
func Slack() DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference</a>

---

##### `Tines`<sup>Required</sup> <a name="Tines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.tines"></a>

```go
func Tines() DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference</a>

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.webhook"></a>

```go
func Webhook() DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `JiraInput`<sup>Optional</sup> <a name="JiraInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.jiraInput"></a>

```go
func JiraInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceNowInput`<sup>Optional</sup> <a name="ServiceNowInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.serviceNowInput"></a>

```go
func ServiceNowInput() interface{}
```

- *Type:* interface{}

---

##### `SlackInput`<sup>Optional</sup> <a name="SlackInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.slackInput"></a>

```go
func SlackInput() interface{}
```

- *Type:* interface{}

---

##### `TinesInput`<sup>Optional</sup> <a name="TinesInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.tinesInput"></a>

```go
func TinesInput() interface{}
```

- *Type:* interface{}

---

##### `WebhookInput`<sup>Optional</sup> <a name="WebhookInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.webhookInput"></a>

```go
func WebhookInput() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig</a>

---


### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

datadatabrickslakewatchalertconfig.NewDataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecretInput">ClientSecretUcSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecret">ClientSecretUcSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretUcSecretInput`<sup>Optional</sup> <a name="ClientSecretUcSecretInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecretInput"></a>

```go
func ClientSecretUcSecretInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecretUcSecret`<sup>Required</sup> <a name="ClientSecretUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecret"></a>

```go
func ClientSecretUcSecret() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

datadatabrickslakewatchalertconfig.NewDataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.botTokenUcSecretInput">BotTokenUcSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.channelInput">ChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.botTokenUcSecret">BotTokenUcSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.channel">Channel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BotTokenUcSecretInput`<sup>Optional</sup> <a name="BotTokenUcSecretInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.botTokenUcSecretInput"></a>

```go
func BotTokenUcSecretInput() *string
```

- *Type:* *string

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.channelInput"></a>

```go
func ChannelInput() *string
```

- *Type:* *string

---

##### `BotTokenUcSecret`<sup>Required</sup> <a name="BotTokenUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.botTokenUcSecret"></a>

```go
func BotTokenUcSecret() *string
```

- *Type:* *string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.channel"></a>

```go
func Channel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

datadatabrickslakewatchalertconfig.NewDataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resetExportUpdates">ResetExportUpdates</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExportUpdates` <a name="ResetExportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resetExportUpdates"></a>

```go
func ResetExportUpdates()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.exportUpdatesInput">ExportUpdatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookSecretUcSecretInput">WebhookSecretUcSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookUriInput">WebhookUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.exportUpdates">ExportUpdates</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookSecretUcSecret">WebhookSecretUcSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookUri">WebhookUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExportUpdatesInput`<sup>Optional</sup> <a name="ExportUpdatesInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.exportUpdatesInput"></a>

```go
func ExportUpdatesInput() interface{}
```

- *Type:* interface{}

---

##### `WebhookSecretUcSecretInput`<sup>Optional</sup> <a name="WebhookSecretUcSecretInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookSecretUcSecretInput"></a>

```go
func WebhookSecretUcSecretInput() *string
```

- *Type:* *string

---

##### `WebhookUriInput`<sup>Optional</sup> <a name="WebhookUriInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookUriInput"></a>

```go
func WebhookUriInput() *string
```

- *Type:* *string

---

##### `ExportUpdates`<sup>Required</sup> <a name="ExportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.exportUpdates"></a>

```go
func ExportUpdates() interface{}
```

- *Type:* interface{}

---

##### `WebhookSecretUcSecret`<sup>Required</sup> <a name="WebhookSecretUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookSecretUcSecret"></a>

```go
func WebhookSecretUcSecret() *string
```

- *Type:* *string

---

##### `WebhookUri`<sup>Required</sup> <a name="WebhookUri" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookUri"></a>

```go
func WebhookUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

datadatabrickslakewatchalertconfig.NewDataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resetExportUpdates">ResetExportUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExportUpdates` <a name="ResetExportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resetExportUpdates"></a>

```go
func ResetExportUpdates()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resetUrl"></a>

```go
func ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.exportUpdatesInput">ExportUpdatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.exportUpdates">ExportUpdates</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExportUpdatesInput`<sup>Optional</sup> <a name="ExportUpdatesInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.exportUpdatesInput"></a>

```go
func ExportUpdatesInput() interface{}
```

- *Type:* interface{}

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `ExportUpdates`<sup>Required</sup> <a name="ExportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.exportUpdates"></a>

```go
func ExportUpdates() interface{}
```

- *Type:* interface{}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

datadatabrickslakewatchalertconfig.NewDataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.apiTokenUcSecretInput">ApiTokenUcSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.defaultIssueTypeInput">DefaultIssueTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.instanceUrlInput">InstanceUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.projectKeyInput">ProjectKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.userEmailInput">UserEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.apiTokenUcSecret">ApiTokenUcSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.defaultIssueType">DefaultIssueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.instanceUrl">InstanceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.projectKey">ProjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.userEmail">UserEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiTokenUcSecretInput`<sup>Optional</sup> <a name="ApiTokenUcSecretInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.apiTokenUcSecretInput"></a>

```go
func ApiTokenUcSecretInput() *string
```

- *Type:* *string

---

##### `DefaultIssueTypeInput`<sup>Optional</sup> <a name="DefaultIssueTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.defaultIssueTypeInput"></a>

```go
func DefaultIssueTypeInput() *string
```

- *Type:* *string

---

##### `InstanceUrlInput`<sup>Optional</sup> <a name="InstanceUrlInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.instanceUrlInput"></a>

```go
func InstanceUrlInput() *string
```

- *Type:* *string

---

##### `ProjectKeyInput`<sup>Optional</sup> <a name="ProjectKeyInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.projectKeyInput"></a>

```go
func ProjectKeyInput() *string
```

- *Type:* *string

---

##### `UserEmailInput`<sup>Optional</sup> <a name="UserEmailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.userEmailInput"></a>

```go
func UserEmailInput() *string
```

- *Type:* *string

---

##### `ApiTokenUcSecret`<sup>Required</sup> <a name="ApiTokenUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.apiTokenUcSecret"></a>

```go
func ApiTokenUcSecret() *string
```

- *Type:* *string

---

##### `DefaultIssueType`<sup>Required</sup> <a name="DefaultIssueType" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.defaultIssueType"></a>

```go
func DefaultIssueType() *string
```

- *Type:* *string

---

##### `InstanceUrl`<sup>Required</sup> <a name="InstanceUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.instanceUrl"></a>

```go
func InstanceUrl() *string
```

- *Type:* *string

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.projectKey"></a>

```go
func ProjectKey() *string
```

- *Type:* *string

---

##### `UserEmail`<sup>Required</sup> <a name="UserEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.userEmail"></a>

```go
func UserEmail() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

datadatabrickslakewatchalertconfig.NewDataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putJira">PutJira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putServiceNow">PutServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putSlack">PutSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putTines">PutTines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putWebhook">PutWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetJira">ResetJira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetServiceNow">ResetServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetSlack">ResetSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetTines">ResetTines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetWebhook">ResetWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJira` <a name="PutJira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putJira"></a>

```go
func PutJira(value DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putJira.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira</a>

---

##### `PutServiceNow` <a name="PutServiceNow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putServiceNow"></a>

```go
func PutServiceNow(value DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putServiceNow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow</a>

---

##### `PutSlack` <a name="PutSlack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putSlack"></a>

```go
func PutSlack(value DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putSlack.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack</a>

---

##### `PutTines` <a name="PutTines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putTines"></a>

```go
func PutTines(value DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putTines.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines</a>

---

##### `PutWebhook` <a name="PutWebhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putWebhook"></a>

```go
func PutWebhook(value DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putWebhook.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetJira` <a name="ResetJira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetJira"></a>

```go
func ResetJira()
```

##### `ResetServiceNow` <a name="ResetServiceNow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetServiceNow"></a>

```go
func ResetServiceNow()
```

##### `ResetSlack` <a name="ResetSlack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetSlack"></a>

```go
func ResetSlack()
```

##### `ResetTines` <a name="ResetTines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetTines"></a>

```go
func ResetTines()
```

##### `ResetWebhook` <a name="ResetWebhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetWebhook"></a>

```go
func ResetWebhook()
```

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.jira">Jira</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.slack">Slack</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.tines">Tines</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.webhook">Webhook</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.jiraInput">JiraInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.serviceNowInput">ServiceNowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.slackInput">SlackInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.tinesInput">TinesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.webhookInput">WebhookInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig">DataDatabricksLakewatchAlertConfigSystemAlertExportConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Jira`<sup>Required</sup> <a name="Jira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.jira"></a>

```go
func Jira() DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference</a>

---

##### `ServiceNow`<sup>Required</sup> <a name="ServiceNow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.serviceNow"></a>

```go
func ServiceNow() DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference</a>

---

##### `Slack`<sup>Required</sup> <a name="Slack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.slack"></a>

```go
func Slack() DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference</a>

---

##### `Tines`<sup>Required</sup> <a name="Tines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.tines"></a>

```go
func Tines() DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference</a>

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.webhook"></a>

```go
func Webhook() DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `JiraInput`<sup>Optional</sup> <a name="JiraInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.jiraInput"></a>

```go
func JiraInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceNowInput`<sup>Optional</sup> <a name="ServiceNowInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.serviceNowInput"></a>

```go
func ServiceNowInput() interface{}
```

- *Type:* interface{}

---

##### `SlackInput`<sup>Optional</sup> <a name="SlackInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.slackInput"></a>

```go
func SlackInput() interface{}
```

- *Type:* interface{}

---

##### `TinesInput`<sup>Optional</sup> <a name="TinesInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.tinesInput"></a>

```go
func TinesInput() interface{}
```

- *Type:* interface{}

---

##### `WebhookInput`<sup>Optional</sup> <a name="WebhookInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.webhookInput"></a>

```go
func WebhookInput() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchAlertConfigSystemAlertExportConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig">DataDatabricksLakewatchAlertConfigSystemAlertExportConfig</a>

---


### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

datadatabrickslakewatchalertconfig.NewDataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecretInput">ClientSecretUcSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecret">ClientSecretUcSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretUcSecretInput`<sup>Optional</sup> <a name="ClientSecretUcSecretInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecretInput"></a>

```go
func ClientSecretUcSecretInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecretUcSecret`<sup>Required</sup> <a name="ClientSecretUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecret"></a>

```go
func ClientSecretUcSecret() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

datadatabrickslakewatchalertconfig.NewDataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.botTokenUcSecretInput">BotTokenUcSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.channelInput">ChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.botTokenUcSecret">BotTokenUcSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.channel">Channel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BotTokenUcSecretInput`<sup>Optional</sup> <a name="BotTokenUcSecretInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.botTokenUcSecretInput"></a>

```go
func BotTokenUcSecretInput() *string
```

- *Type:* *string

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.channelInput"></a>

```go
func ChannelInput() *string
```

- *Type:* *string

---

##### `BotTokenUcSecret`<sup>Required</sup> <a name="BotTokenUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.botTokenUcSecret"></a>

```go
func BotTokenUcSecret() *string
```

- *Type:* *string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.channel"></a>

```go
func Channel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

datadatabrickslakewatchalertconfig.NewDataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resetExportUpdates">ResetExportUpdates</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExportUpdates` <a name="ResetExportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resetExportUpdates"></a>

```go
func ResetExportUpdates()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.exportUpdatesInput">ExportUpdatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookSecretUcSecretInput">WebhookSecretUcSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookUriInput">WebhookUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.exportUpdates">ExportUpdates</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookSecretUcSecret">WebhookSecretUcSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookUri">WebhookUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExportUpdatesInput`<sup>Optional</sup> <a name="ExportUpdatesInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.exportUpdatesInput"></a>

```go
func ExportUpdatesInput() interface{}
```

- *Type:* interface{}

---

##### `WebhookSecretUcSecretInput`<sup>Optional</sup> <a name="WebhookSecretUcSecretInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookSecretUcSecretInput"></a>

```go
func WebhookSecretUcSecretInput() *string
```

- *Type:* *string

---

##### `WebhookUriInput`<sup>Optional</sup> <a name="WebhookUriInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookUriInput"></a>

```go
func WebhookUriInput() *string
```

- *Type:* *string

---

##### `ExportUpdates`<sup>Required</sup> <a name="ExportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.exportUpdates"></a>

```go
func ExportUpdates() interface{}
```

- *Type:* interface{}

---

##### `WebhookSecretUcSecret`<sup>Required</sup> <a name="WebhookSecretUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookSecretUcSecret"></a>

```go
func WebhookSecretUcSecret() *string
```

- *Type:* *string

---

##### `WebhookUri`<sup>Required</sup> <a name="WebhookUri" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookUri"></a>

```go
func WebhookUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

datadatabrickslakewatchalertconfig.NewDataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resetExportUpdates">ResetExportUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExportUpdates` <a name="ResetExportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resetExportUpdates"></a>

```go
func ResetExportUpdates()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resetUrl"></a>

```go
func ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.exportUpdatesInput">ExportUpdatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.exportUpdates">ExportUpdates</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExportUpdatesInput`<sup>Optional</sup> <a name="ExportUpdatesInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.exportUpdatesInput"></a>

```go
func ExportUpdatesInput() interface{}
```

- *Type:* interface{}

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `ExportUpdates`<sup>Required</sup> <a name="ExportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.exportUpdates"></a>

```go
func ExportUpdates() interface{}
```

- *Type:* interface{}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksLakewatchAlertConfigUpdatedByOutputReference <a name="DataDatabricksLakewatchAlertConfigUpdatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabrickslakewatchalertconfig"

datadatabrickslakewatchalertconfig.NewDataDatabricksLakewatchAlertConfigUpdatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksLakewatchAlertConfigUpdatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resetPrincipalType">ResetPrincipalType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetPrincipalType` <a name="ResetPrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resetPrincipalType"></a>

```go
func ResetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.principalTypeInput">PrincipalTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.principalType">PrincipalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy">DataDatabricksLakewatchAlertConfigUpdatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrincipalTypeInput`<sup>Optional</sup> <a name="PrincipalTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.principalTypeInput"></a>

```go
func PrincipalTypeInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.principalType"></a>

```go
func PrincipalType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksLakewatchAlertConfigUpdatedBy
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy">DataDatabricksLakewatchAlertConfigUpdatedBy</a>

---



