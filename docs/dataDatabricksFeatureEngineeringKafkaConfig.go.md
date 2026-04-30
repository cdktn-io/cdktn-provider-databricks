# `dataDatabricksFeatureEngineeringKafkaConfig` Submodule <a name="`dataDatabricksFeatureEngineeringKafkaConfig` Submodule" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksFeatureEngineeringKafkaConfig <a name="DataDatabricksFeatureEngineeringKafkaConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config databricks_feature_engineering_kafka_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringkafkaconfig"

datadatabricksfeatureengineeringkafkaconfig.NewDataDatabricksFeatureEngineeringKafkaConfig(scope Construct, id *string, config DataDatabricksFeatureEngineeringKafkaConfigConfig) DataDatabricksFeatureEngineeringKafkaConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig">DataDatabricksFeatureEngineeringKafkaConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig">DataDatabricksFeatureEngineeringKafkaConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksFeatureEngineeringKafkaConfigProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfig">DataDatabricksFeatureEngineeringKafkaConfigProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksFeatureEngineeringKafkaConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringkafkaconfig"

datadatabricksfeatureengineeringkafkaconfig.DataDatabricksFeatureEngineeringKafkaConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringkafkaconfig"

datadatabricksfeatureengineeringkafkaconfig.DataDatabricksFeatureEngineeringKafkaConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringkafkaconfig"

datadatabricksfeatureengineeringkafkaconfig.DataDatabricksFeatureEngineeringKafkaConfig_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringkafkaconfig"

datadatabricksfeatureengineeringkafkaconfig.DataDatabricksFeatureEngineeringKafkaConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksFeatureEngineeringKafkaConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksFeatureEngineeringKafkaConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksFeatureEngineeringKafkaConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksFeatureEngineeringKafkaConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.authConfig">AuthConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.backfillSource">BackfillSource</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference">DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.bootstrapServers">BootstrapServers</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.extraOptions">ExtraOptions</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.keySchema">KeySchema</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference">DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference">DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.subscriptionMode">SubscriptionMode</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference">DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.valueSchema">ValueSchema</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference">DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AuthConfig`<sup>Required</sup> <a name="AuthConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.authConfig"></a>

```go
func AuthConfig() DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference">DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference</a>

---

##### `BackfillSource`<sup>Required</sup> <a name="BackfillSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.backfillSource"></a>

```go
func BackfillSource() DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference">DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference</a>

---

##### `BootstrapServers`<sup>Required</sup> <a name="BootstrapServers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.bootstrapServers"></a>

```go
func BootstrapServers() *string
```

- *Type:* *string

---

##### `ExtraOptions`<sup>Required</sup> <a name="ExtraOptions" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.extraOptions"></a>

```go
func ExtraOptions() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `KeySchema`<sup>Required</sup> <a name="KeySchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.keySchema"></a>

```go
func KeySchema() DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference">DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference">DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference</a>

---

##### `SubscriptionMode`<sup>Required</sup> <a name="SubscriptionMode" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.subscriptionMode"></a>

```go
func SubscriptionMode() DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference">DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference</a>

---

##### `ValueSchema`<sup>Required</sup> <a name="ValueSchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.valueSchema"></a>

```go
func ValueSchema() DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference">DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksFeatureEngineeringKafkaConfigAuthConfig <a name="DataDatabricksFeatureEngineeringKafkaConfigAuthConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringkafkaconfig"

&datadatabricksfeatureengineeringkafkaconfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfig {
	UcServiceCredentialName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfig.property.ucServiceCredentialName">UcServiceCredentialName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#uc_service_credential_name DataDatabricksFeatureEngineeringKafkaConfig#uc_service_credential_name}. |

---

##### `UcServiceCredentialName`<sup>Optional</sup> <a name="UcServiceCredentialName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfig.property.ucServiceCredentialName"></a>

```go
UcServiceCredentialName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#uc_service_credential_name DataDatabricksFeatureEngineeringKafkaConfig#uc_service_credential_name}.

---

### DataDatabricksFeatureEngineeringKafkaConfigBackfillSource <a name="DataDatabricksFeatureEngineeringKafkaConfigBackfillSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringkafkaconfig"

&datadatabricksfeatureengineeringkafkaconfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSource {
	DeltaTableSource: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSource.property.deltaTableSource">DeltaTableSource</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#delta_table_source DataDatabricksFeatureEngineeringKafkaConfig#delta_table_source}. |

---

##### `DeltaTableSource`<sup>Optional</sup> <a name="DeltaTableSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSource.property.deltaTableSource"></a>

```go
DeltaTableSource DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#delta_table_source DataDatabricksFeatureEngineeringKafkaConfig#delta_table_source}.

---

### DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource <a name="DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringkafkaconfig"

&datadatabricksfeatureengineeringkafkaconfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource {
	FullName: *string,
	DataframeSchema: *string,
	EntityColumns: *[]*string,
	FilterCondition: *string,
	TimeseriesColumn: *string,
	TransformationSql: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.fullName">FullName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#full_name DataDatabricksFeatureEngineeringKafkaConfig#full_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.dataframeSchema">DataframeSchema</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#dataframe_schema DataDatabricksFeatureEngineeringKafkaConfig#dataframe_schema}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.entityColumns">EntityColumns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#entity_columns DataDatabricksFeatureEngineeringKafkaConfig#entity_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.filterCondition">FilterCondition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#filter_condition DataDatabricksFeatureEngineeringKafkaConfig#filter_condition}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.timeseriesColumn">TimeseriesColumn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#timeseries_column DataDatabricksFeatureEngineeringKafkaConfig#timeseries_column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.transformationSql">TransformationSql</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#transformation_sql DataDatabricksFeatureEngineeringKafkaConfig#transformation_sql}. |

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.fullName"></a>

```go
FullName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#full_name DataDatabricksFeatureEngineeringKafkaConfig#full_name}.

---

##### `DataframeSchema`<sup>Optional</sup> <a name="DataframeSchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.dataframeSchema"></a>

```go
DataframeSchema *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#dataframe_schema DataDatabricksFeatureEngineeringKafkaConfig#dataframe_schema}.

---

##### `EntityColumns`<sup>Optional</sup> <a name="EntityColumns" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.entityColumns"></a>

```go
EntityColumns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#entity_columns DataDatabricksFeatureEngineeringKafkaConfig#entity_columns}.

---

##### `FilterCondition`<sup>Optional</sup> <a name="FilterCondition" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.filterCondition"></a>

```go
FilterCondition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#filter_condition DataDatabricksFeatureEngineeringKafkaConfig#filter_condition}.

---

##### `TimeseriesColumn`<sup>Optional</sup> <a name="TimeseriesColumn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.timeseriesColumn"></a>

```go
TimeseriesColumn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#timeseries_column DataDatabricksFeatureEngineeringKafkaConfig#timeseries_column}.

---

##### `TransformationSql`<sup>Optional</sup> <a name="TransformationSql" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.transformationSql"></a>

```go
TransformationSql *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#transformation_sql DataDatabricksFeatureEngineeringKafkaConfig#transformation_sql}.

---

### DataDatabricksFeatureEngineeringKafkaConfigConfig <a name="DataDatabricksFeatureEngineeringKafkaConfigConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringkafkaconfig"

&datadatabricksfeatureengineeringkafkaconfig.DataDatabricksFeatureEngineeringKafkaConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#name DataDatabricksFeatureEngineeringKafkaConfig#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfig">DataDatabricksFeatureEngineeringKafkaConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#provider_config DataDatabricksFeatureEngineeringKafkaConfig#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#name DataDatabricksFeatureEngineeringKafkaConfig#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksFeatureEngineeringKafkaConfigProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfig">DataDatabricksFeatureEngineeringKafkaConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#provider_config DataDatabricksFeatureEngineeringKafkaConfig#provider_config}.

---

### DataDatabricksFeatureEngineeringKafkaConfigKeySchema <a name="DataDatabricksFeatureEngineeringKafkaConfigKeySchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringkafkaconfig"

&datadatabricksfeatureengineeringkafkaconfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchema {
	JsonSchema: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchema.property.jsonSchema">JsonSchema</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#json_schema DataDatabricksFeatureEngineeringKafkaConfig#json_schema}. |

---

##### `JsonSchema`<sup>Optional</sup> <a name="JsonSchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchema.property.jsonSchema"></a>

```go
JsonSchema *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#json_schema DataDatabricksFeatureEngineeringKafkaConfig#json_schema}.

---

### DataDatabricksFeatureEngineeringKafkaConfigProviderConfig <a name="DataDatabricksFeatureEngineeringKafkaConfigProviderConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringkafkaconfig"

&datadatabricksfeatureengineeringkafkaconfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#workspace_id DataDatabricksFeatureEngineeringKafkaConfig#workspace_id}. |

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#workspace_id DataDatabricksFeatureEngineeringKafkaConfig#workspace_id}.

---

### DataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode <a name="DataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringkafkaconfig"

&datadatabricksfeatureengineeringkafkaconfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode {
	Assign: *string,
	Subscribe: *string,
	SubscribePattern: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode.property.assign">Assign</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#assign DataDatabricksFeatureEngineeringKafkaConfig#assign}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode.property.subscribe">Subscribe</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#subscribe DataDatabricksFeatureEngineeringKafkaConfig#subscribe}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode.property.subscribePattern">SubscribePattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#subscribe_pattern DataDatabricksFeatureEngineeringKafkaConfig#subscribe_pattern}. |

---

##### `Assign`<sup>Optional</sup> <a name="Assign" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode.property.assign"></a>

```go
Assign *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#assign DataDatabricksFeatureEngineeringKafkaConfig#assign}.

---

##### `Subscribe`<sup>Optional</sup> <a name="Subscribe" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode.property.subscribe"></a>

```go
Subscribe *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#subscribe DataDatabricksFeatureEngineeringKafkaConfig#subscribe}.

---

##### `SubscribePattern`<sup>Optional</sup> <a name="SubscribePattern" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode.property.subscribePattern"></a>

```go
SubscribePattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#subscribe_pattern DataDatabricksFeatureEngineeringKafkaConfig#subscribe_pattern}.

---

### DataDatabricksFeatureEngineeringKafkaConfigValueSchema <a name="DataDatabricksFeatureEngineeringKafkaConfigValueSchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringkafkaconfig"

&datadatabricksfeatureengineeringkafkaconfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchema {
	JsonSchema: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchema.property.jsonSchema">JsonSchema</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#json_schema DataDatabricksFeatureEngineeringKafkaConfig#json_schema}. |

---

##### `JsonSchema`<sup>Optional</sup> <a name="JsonSchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchema.property.jsonSchema"></a>

```go
JsonSchema *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/feature_engineering_kafka_config#json_schema DataDatabricksFeatureEngineeringKafkaConfig#json_schema}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringkafkaconfig"

datadatabricksfeatureengineeringkafkaconfig.NewDataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.resetUcServiceCredentialName">ResetUcServiceCredentialName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUcServiceCredentialName` <a name="ResetUcServiceCredentialName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.resetUcServiceCredentialName"></a>

```go
func ResetUcServiceCredentialName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.property.ucServiceCredentialNameInput">UcServiceCredentialNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.property.ucServiceCredentialName">UcServiceCredentialName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfig">DataDatabricksFeatureEngineeringKafkaConfigAuthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UcServiceCredentialNameInput`<sup>Optional</sup> <a name="UcServiceCredentialNameInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.property.ucServiceCredentialNameInput"></a>

```go
func UcServiceCredentialNameInput() *string
```

- *Type:* *string

---

##### `UcServiceCredentialName`<sup>Required</sup> <a name="UcServiceCredentialName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.property.ucServiceCredentialName"></a>

```go
func UcServiceCredentialName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksFeatureEngineeringKafkaConfigAuthConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigAuthConfig">DataDatabricksFeatureEngineeringKafkaConfigAuthConfig</a>

---


### DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringkafkaconfig"

datadatabricksfeatureengineeringkafkaconfig.NewDataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetDataframeSchema">ResetDataframeSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetEntityColumns">ResetEntityColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetFilterCondition">ResetFilterCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetTimeseriesColumn">ResetTimeseriesColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetTransformationSql">ResetTransformationSql</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataframeSchema` <a name="ResetDataframeSchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetDataframeSchema"></a>

```go
func ResetDataframeSchema()
```

##### `ResetEntityColumns` <a name="ResetEntityColumns" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetEntityColumns"></a>

```go
func ResetEntityColumns()
```

##### `ResetFilterCondition` <a name="ResetFilterCondition" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetFilterCondition"></a>

```go
func ResetFilterCondition()
```

##### `ResetTimeseriesColumn` <a name="ResetTimeseriesColumn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetTimeseriesColumn"></a>

```go
func ResetTimeseriesColumn()
```

##### `ResetTransformationSql` <a name="ResetTransformationSql" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetTransformationSql"></a>

```go
func ResetTransformationSql()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchemaInput">DataframeSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumnsInput">EntityColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.filterConditionInput">FilterConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fullNameInput">FullNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput">TimeseriesColumnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSqlInput">TransformationSqlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchema">DataframeSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumns">EntityColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.filterCondition">FilterCondition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fullName">FullName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumn">TimeseriesColumn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSql">TransformationSql</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataframeSchemaInput`<sup>Optional</sup> <a name="DataframeSchemaInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchemaInput"></a>

```go
func DataframeSchemaInput() *string
```

- *Type:* *string

---

##### `EntityColumnsInput`<sup>Optional</sup> <a name="EntityColumnsInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumnsInput"></a>

```go
func EntityColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FilterConditionInput`<sup>Optional</sup> <a name="FilterConditionInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.filterConditionInput"></a>

```go
func FilterConditionInput() *string
```

- *Type:* *string

---

##### `FullNameInput`<sup>Optional</sup> <a name="FullNameInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fullNameInput"></a>

```go
func FullNameInput() *string
```

- *Type:* *string

---

##### `TimeseriesColumnInput`<sup>Optional</sup> <a name="TimeseriesColumnInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput"></a>

```go
func TimeseriesColumnInput() *string
```

- *Type:* *string

---

##### `TransformationSqlInput`<sup>Optional</sup> <a name="TransformationSqlInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSqlInput"></a>

```go
func TransformationSqlInput() *string
```

- *Type:* *string

---

##### `DataframeSchema`<sup>Required</sup> <a name="DataframeSchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchema"></a>

```go
func DataframeSchema() *string
```

- *Type:* *string

---

##### `EntityColumns`<sup>Required</sup> <a name="EntityColumns" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumns"></a>

```go
func EntityColumns() *[]*string
```

- *Type:* *[]*string

---

##### `FilterCondition`<sup>Required</sup> <a name="FilterCondition" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.filterCondition"></a>

```go
func FilterCondition() *string
```

- *Type:* *string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fullName"></a>

```go
func FullName() *string
```

- *Type:* *string

---

##### `TimeseriesColumn`<sup>Required</sup> <a name="TimeseriesColumn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumn"></a>

```go
func TimeseriesColumn() *string
```

- *Type:* *string

---

##### `TransformationSql`<sup>Required</sup> <a name="TransformationSql" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSql"></a>

```go
func TransformationSql() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringkafkaconfig"

datadatabricksfeatureengineeringkafkaconfig.NewDataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.putDeltaTableSource">PutDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.resetDeltaTableSource">ResetDeltaTableSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeltaTableSource` <a name="PutDeltaTableSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.putDeltaTableSource"></a>

```go
func PutDeltaTableSource(value DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.putDeltaTableSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a>

---

##### `ResetDeltaTableSource` <a name="ResetDeltaTableSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.resetDeltaTableSource"></a>

```go
func ResetDeltaTableSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableSource">DeltaTableSource</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference">DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableSourceInput">DeltaTableSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSource">DataDatabricksFeatureEngineeringKafkaConfigBackfillSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeltaTableSource`<sup>Required</sup> <a name="DeltaTableSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableSource"></a>

```go
func DeltaTableSource() DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference">DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference</a>

---

##### `DeltaTableSourceInput`<sup>Optional</sup> <a name="DeltaTableSourceInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableSourceInput"></a>

```go
func DeltaTableSourceInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksFeatureEngineeringKafkaConfigBackfillSource
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigBackfillSource">DataDatabricksFeatureEngineeringKafkaConfigBackfillSource</a>

---


### DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringkafkaconfig"

datadatabricksfeatureengineeringkafkaconfig.NewDataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.resetJsonSchema">ResetJsonSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJsonSchema` <a name="ResetJsonSchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.resetJsonSchema"></a>

```go
func ResetJsonSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.property.jsonSchemaInput">JsonSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.property.jsonSchema">JsonSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchema">DataDatabricksFeatureEngineeringKafkaConfigKeySchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JsonSchemaInput`<sup>Optional</sup> <a name="JsonSchemaInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.property.jsonSchemaInput"></a>

```go
func JsonSchemaInput() *string
```

- *Type:* *string

---

##### `JsonSchema`<sup>Required</sup> <a name="JsonSchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.property.jsonSchema"></a>

```go
func JsonSchema() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksFeatureEngineeringKafkaConfigKeySchema
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigKeySchema">DataDatabricksFeatureEngineeringKafkaConfigKeySchema</a>

---


### DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringkafkaconfig"

datadatabricksfeatureengineeringkafkaconfig.NewDataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringkafkaconfig"

datadatabricksfeatureengineeringkafkaconfig.NewDataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetAssign">ResetAssign</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetSubscribe">ResetSubscribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetSubscribePattern">ResetSubscribePattern</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAssign` <a name="ResetAssign" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetAssign"></a>

```go
func ResetAssign()
```

##### `ResetSubscribe` <a name="ResetSubscribe" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetSubscribe"></a>

```go
func ResetSubscribe()
```

##### `ResetSubscribePattern` <a name="ResetSubscribePattern" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetSubscribePattern"></a>

```go
func ResetSubscribePattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.assignInput">AssignInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribeInput">SubscribeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribePatternInput">SubscribePatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.assign">Assign</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribe">Subscribe</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribePattern">SubscribePattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode">DataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssignInput`<sup>Optional</sup> <a name="AssignInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.assignInput"></a>

```go
func AssignInput() *string
```

- *Type:* *string

---

##### `SubscribeInput`<sup>Optional</sup> <a name="SubscribeInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribeInput"></a>

```go
func SubscribeInput() *string
```

- *Type:* *string

---

##### `SubscribePatternInput`<sup>Optional</sup> <a name="SubscribePatternInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribePatternInput"></a>

```go
func SubscribePatternInput() *string
```

- *Type:* *string

---

##### `Assign`<sup>Required</sup> <a name="Assign" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.assign"></a>

```go
func Assign() *string
```

- *Type:* *string

---

##### `Subscribe`<sup>Required</sup> <a name="Subscribe" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribe"></a>

```go
func Subscribe() *string
```

- *Type:* *string

---

##### `SubscribePattern`<sup>Required</sup> <a name="SubscribePattern" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribePattern"></a>

```go
func SubscribePattern() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode">DataDatabricksFeatureEngineeringKafkaConfigSubscriptionMode</a>

---


### DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringkafkaconfig"

datadatabricksfeatureengineeringkafkaconfig.NewDataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.resetJsonSchema">ResetJsonSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJsonSchema` <a name="ResetJsonSchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.resetJsonSchema"></a>

```go
func ResetJsonSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.property.jsonSchemaInput">JsonSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.property.jsonSchema">JsonSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchema">DataDatabricksFeatureEngineeringKafkaConfigValueSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JsonSchemaInput`<sup>Optional</sup> <a name="JsonSchemaInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.property.jsonSchemaInput"></a>

```go
func JsonSchemaInput() *string
```

- *Type:* *string

---

##### `JsonSchema`<sup>Required</sup> <a name="JsonSchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.property.jsonSchema"></a>

```go
func JsonSchema() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksFeatureEngineeringKafkaConfigValueSchema
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfig.DataDatabricksFeatureEngineeringKafkaConfigValueSchema">DataDatabricksFeatureEngineeringKafkaConfigValueSchema</a>

---



