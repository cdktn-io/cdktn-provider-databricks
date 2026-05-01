# `dataDatabricksFeatureEngineeringFeature` Submodule <a name="`dataDatabricksFeatureEngineeringFeature` Submodule" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksFeatureEngineeringFeature <a name="DataDatabricksFeatureEngineeringFeature" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature databricks_feature_engineering_feature}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeature(scope Construct, id *string, config DataDatabricksFeatureEngineeringFeatureConfig) DataDatabricksFeatureEngineeringFeature
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureConfig">DataDatabricksFeatureEngineeringFeatureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureConfig">DataDatabricksFeatureEngineeringFeatureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksFeatureEngineeringFeatureProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfig">DataDatabricksFeatureEngineeringFeatureProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksFeatureEngineeringFeature resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeature_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeature_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeature_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeature_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksFeatureEngineeringFeature resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksFeatureEngineeringFeature to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksFeatureEngineeringFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksFeatureEngineeringFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.entities">Entities</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesList">DataDatabricksFeatureEngineeringFeatureEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.filterCondition">FilterCondition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.function">Function</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.inputs">Inputs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.lineageContext">LineageContext</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference">DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference">DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.source">Source</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference">DataDatabricksFeatureEngineeringFeatureSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.timeseriesColumn">TimeseriesColumn</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference">DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.timeWindow">TimeWindow</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference">DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.fullNameInput">FullNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.fullName">FullName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Entities`<sup>Required</sup> <a name="Entities" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.entities"></a>

```go
func Entities() DataDatabricksFeatureEngineeringFeatureEntitiesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesList">DataDatabricksFeatureEngineeringFeatureEntitiesList</a>

---

##### `FilterCondition`<sup>Required</sup> <a name="FilterCondition" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.filterCondition"></a>

```go
func FilterCondition() *string
```

- *Type:* *string

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.function"></a>

```go
func Function() DataDatabricksFeatureEngineeringFeatureFunctionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionOutputReference</a>

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.inputs"></a>

```go
func Inputs() *[]*string
```

- *Type:* *[]*string

---

##### `LineageContext`<sup>Required</sup> <a name="LineageContext" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.lineageContext"></a>

```go
func LineageContext() DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference">DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference">DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.source"></a>

```go
func Source() DataDatabricksFeatureEngineeringFeatureSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference">DataDatabricksFeatureEngineeringFeatureSourceOutputReference</a>

---

##### `TimeseriesColumn`<sup>Required</sup> <a name="TimeseriesColumn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.timeseriesColumn"></a>

```go
func TimeseriesColumn() DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference">DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference</a>

---

##### `TimeWindow`<sup>Required</sup> <a name="TimeWindow" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.timeWindow"></a>

```go
func TimeWindow() DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference">DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference</a>

---

##### `FullNameInput`<sup>Optional</sup> <a name="FullNameInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.fullNameInput"></a>

```go
func FullNameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.fullName"></a>

```go
func FullName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeature.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksFeatureEngineeringFeatureConfig <a name="DataDatabricksFeatureEngineeringFeatureConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	FullName: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureConfig.property.fullName">FullName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#full_name DataDatabricksFeatureEngineeringFeature#full_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfig">DataDatabricksFeatureEngineeringFeatureProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#provider_config DataDatabricksFeatureEngineeringFeature#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureConfig.property.fullName"></a>

```go
FullName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#full_name DataDatabricksFeatureEngineeringFeature#full_name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksFeatureEngineeringFeatureProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfig">DataDatabricksFeatureEngineeringFeatureProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#provider_config DataDatabricksFeatureEngineeringFeature#provider_config}.

---

### DataDatabricksFeatureEngineeringFeatureEntities <a name="DataDatabricksFeatureEngineeringFeatureEntities" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntities.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureEntities {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntities.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#name DataDatabricksFeatureEngineeringFeature#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntities.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#name DataDatabricksFeatureEngineeringFeature#name}.

---

### DataDatabricksFeatureEngineeringFeatureFunction <a name="DataDatabricksFeatureEngineeringFeatureFunction" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureFunction {
	AggregationFunction: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction,
	ColumnSelection: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelection,
	ExtraParameters: interface{},
	FunctionType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunction.property.aggregationFunction">AggregationFunction</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#aggregation_function DataDatabricksFeatureEngineeringFeature#aggregation_function}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunction.property.columnSelection">ColumnSelection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelection">DataDatabricksFeatureEngineeringFeatureFunctionColumnSelection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#column_selection DataDatabricksFeatureEngineeringFeature#column_selection}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunction.property.extraParameters">ExtraParameters</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#extra_parameters DataDatabricksFeatureEngineeringFeature#extra_parameters}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunction.property.functionType">FunctionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#function_type DataDatabricksFeatureEngineeringFeature#function_type}. |

---

##### `AggregationFunction`<sup>Optional</sup> <a name="AggregationFunction" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunction.property.aggregationFunction"></a>

```go
AggregationFunction DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#aggregation_function DataDatabricksFeatureEngineeringFeature#aggregation_function}.

---

##### `ColumnSelection`<sup>Optional</sup> <a name="ColumnSelection" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunction.property.columnSelection"></a>

```go
ColumnSelection DataDatabricksFeatureEngineeringFeatureFunctionColumnSelection
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelection">DataDatabricksFeatureEngineeringFeatureFunctionColumnSelection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#column_selection DataDatabricksFeatureEngineeringFeature#column_selection}.

---

##### `ExtraParameters`<sup>Optional</sup> <a name="ExtraParameters" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunction.property.extraParameters"></a>

```go
ExtraParameters interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#extra_parameters DataDatabricksFeatureEngineeringFeature#extra_parameters}.

---

##### `FunctionType`<sup>Optional</sup> <a name="FunctionType" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunction.property.functionType"></a>

```go
FunctionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#function_type DataDatabricksFeatureEngineeringFeature#function_type}.

---

### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction {
	ApproxCountDistinct: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct,
	ApproxPercentile: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile,
	Avg: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvg,
	CountFunction: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunction,
	First: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirst,
	Last: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLast,
	Max: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMax,
	Min: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMin,
	StddevPop: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPop,
	StddevSamp: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp,
	Sum: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSum,
	TimeWindow: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow,
	VarPop: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPop,
	VarSamp: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSamp,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction.property.approxCountDistinct">ApproxCountDistinct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#approx_count_distinct DataDatabricksFeatureEngineeringFeature#approx_count_distinct}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction.property.approxPercentile">ApproxPercentile</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#approx_percentile DataDatabricksFeatureEngineeringFeature#approx_percentile}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction.property.avg">Avg</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvg">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvg</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#avg DataDatabricksFeatureEngineeringFeature#avg}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction.property.countFunction">CountFunction</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunction">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#count_function DataDatabricksFeatureEngineeringFeature#count_function}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction.property.first">First</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirst">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirst</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#first DataDatabricksFeatureEngineeringFeature#first}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction.property.last">Last</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLast">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLast</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#last DataDatabricksFeatureEngineeringFeature#last}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction.property.max">Max</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMax">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMax</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#max DataDatabricksFeatureEngineeringFeature#max}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction.property.min">Min</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMin">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMin</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#min DataDatabricksFeatureEngineeringFeature#min}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction.property.stddevPop">StddevPop</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPop">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPop</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#stddev_pop DataDatabricksFeatureEngineeringFeature#stddev_pop}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction.property.stddevSamp">StddevSamp</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#stddev_samp DataDatabricksFeatureEngineeringFeature#stddev_samp}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction.property.sum">Sum</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSum">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSum</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#sum DataDatabricksFeatureEngineeringFeature#sum}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction.property.timeWindow">TimeWindow</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#time_window DataDatabricksFeatureEngineeringFeature#time_window}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction.property.varPop">VarPop</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPop">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPop</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#var_pop DataDatabricksFeatureEngineeringFeature#var_pop}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction.property.varSamp">VarSamp</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSamp">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSamp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#var_samp DataDatabricksFeatureEngineeringFeature#var_samp}. |

---

##### `ApproxCountDistinct`<sup>Optional</sup> <a name="ApproxCountDistinct" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction.property.approxCountDistinct"></a>

```go
ApproxCountDistinct DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#approx_count_distinct DataDatabricksFeatureEngineeringFeature#approx_count_distinct}.

---

##### `ApproxPercentile`<sup>Optional</sup> <a name="ApproxPercentile" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction.property.approxPercentile"></a>

```go
ApproxPercentile DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#approx_percentile DataDatabricksFeatureEngineeringFeature#approx_percentile}.

---

##### `Avg`<sup>Optional</sup> <a name="Avg" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction.property.avg"></a>

```go
Avg DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvg
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvg">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvg</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#avg DataDatabricksFeatureEngineeringFeature#avg}.

---

##### `CountFunction`<sup>Optional</sup> <a name="CountFunction" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction.property.countFunction"></a>

```go
CountFunction DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunction
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunction">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#count_function DataDatabricksFeatureEngineeringFeature#count_function}.

---

##### `First`<sup>Optional</sup> <a name="First" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction.property.first"></a>

```go
First DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirst
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirst">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirst</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#first DataDatabricksFeatureEngineeringFeature#first}.

---

##### `Last`<sup>Optional</sup> <a name="Last" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction.property.last"></a>

```go
Last DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLast
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLast">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLast</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#last DataDatabricksFeatureEngineeringFeature#last}.

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction.property.max"></a>

```go
Max DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMax
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMax">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMax</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#max DataDatabricksFeatureEngineeringFeature#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction.property.min"></a>

```go
Min DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMin
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMin">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMin</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#min DataDatabricksFeatureEngineeringFeature#min}.

---

##### `StddevPop`<sup>Optional</sup> <a name="StddevPop" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction.property.stddevPop"></a>

```go
StddevPop DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPop
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPop">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPop</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#stddev_pop DataDatabricksFeatureEngineeringFeature#stddev_pop}.

---

##### `StddevSamp`<sup>Optional</sup> <a name="StddevSamp" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction.property.stddevSamp"></a>

```go
StddevSamp DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#stddev_samp DataDatabricksFeatureEngineeringFeature#stddev_samp}.

---

##### `Sum`<sup>Optional</sup> <a name="Sum" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction.property.sum"></a>

```go
Sum DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSum
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSum">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSum</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#sum DataDatabricksFeatureEngineeringFeature#sum}.

---

##### `TimeWindow`<sup>Optional</sup> <a name="TimeWindow" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction.property.timeWindow"></a>

```go
TimeWindow DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#time_window DataDatabricksFeatureEngineeringFeature#time_window}.

---

##### `VarPop`<sup>Optional</sup> <a name="VarPop" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction.property.varPop"></a>

```go
VarPop DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPop
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPop">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPop</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#var_pop DataDatabricksFeatureEngineeringFeature#var_pop}.

---

##### `VarSamp`<sup>Optional</sup> <a name="VarSamp" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction.property.varSamp"></a>

```go
VarSamp DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSamp
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSamp">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSamp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#var_samp DataDatabricksFeatureEngineeringFeature#var_samp}.

---

### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct {
	Input: *string,
	RelativeSd: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct.property.input">Input</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct.property.relativeSd">RelativeSd</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#relative_sd DataDatabricksFeatureEngineeringFeature#relative_sd}. |

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct.property.input"></a>

```go
Input *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}.

---

##### `RelativeSd`<sup>Optional</sup> <a name="RelativeSd" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct.property.relativeSd"></a>

```go
RelativeSd *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#relative_sd DataDatabricksFeatureEngineeringFeature#relative_sd}.

---

### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile {
	Input: *string,
	Percentile: *f64,
	Accuracy: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile.property.input">Input</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile.property.percentile">Percentile</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#percentile DataDatabricksFeatureEngineeringFeature#percentile}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile.property.accuracy">Accuracy</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#accuracy DataDatabricksFeatureEngineeringFeature#accuracy}. |

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile.property.input"></a>

```go
Input *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}.

---

##### `Percentile`<sup>Required</sup> <a name="Percentile" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile.property.percentile"></a>

```go
Percentile *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#percentile DataDatabricksFeatureEngineeringFeature#percentile}.

---

##### `Accuracy`<sup>Optional</sup> <a name="Accuracy" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile.property.accuracy"></a>

```go
Accuracy *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#accuracy DataDatabricksFeatureEngineeringFeature#accuracy}.

---

### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvg <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvg" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvg"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvg.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvg {
	Input: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvg.property.input">Input</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}. |

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvg.property.input"></a>

```go
Input *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}.

---

### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunction <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunction" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunction {
	Input: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunction.property.input">Input</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}. |

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunction.property.input"></a>

```go
Input *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}.

---

### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirst <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirst" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirst"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirst.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirst {
	Input: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirst.property.input">Input</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}. |

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirst.property.input"></a>

```go
Input *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}.

---

### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLast <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLast" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLast"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLast.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLast {
	Input: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLast.property.input">Input</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}. |

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLast.property.input"></a>

```go
Input *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}.

---

### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMax <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMax" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMax"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMax.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMax {
	Input: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMax.property.input">Input</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}. |

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMax.property.input"></a>

```go
Input *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}.

---

### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMin <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMin" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMin"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMin.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMin {
	Input: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMin.property.input">Input</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}. |

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMin.property.input"></a>

```go
Input *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}.

---

### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPop <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPop" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPop"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPop.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPop {
	Input: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPop.property.input">Input</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}. |

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPop.property.input"></a>

```go
Input *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}.

---

### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp {
	Input: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp.property.input">Input</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}. |

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp.property.input"></a>

```go
Input *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}.

---

### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSum <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSum" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSum"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSum.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSum {
	Input: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSum.property.input">Input</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}. |

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSum.property.input"></a>

```go
Input *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}.

---

### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow {
	Continuous: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous,
	Sliding: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding,
	Tumbling: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow.property.continuous">Continuous</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#continuous DataDatabricksFeatureEngineeringFeature#continuous}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow.property.sliding">Sliding</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#sliding DataDatabricksFeatureEngineeringFeature#sliding}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow.property.tumbling">Tumbling</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#tumbling DataDatabricksFeatureEngineeringFeature#tumbling}. |

---

##### `Continuous`<sup>Optional</sup> <a name="Continuous" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow.property.continuous"></a>

```go
Continuous DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#continuous DataDatabricksFeatureEngineeringFeature#continuous}.

---

##### `Sliding`<sup>Optional</sup> <a name="Sliding" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow.property.sliding"></a>

```go
Sliding DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#sliding DataDatabricksFeatureEngineeringFeature#sliding}.

---

##### `Tumbling`<sup>Optional</sup> <a name="Tumbling" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow.property.tumbling"></a>

```go
Tumbling DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#tumbling DataDatabricksFeatureEngineeringFeature#tumbling}.

---

### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous {
	WindowDuration: *string,
	Offset: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous.property.windowDuration">WindowDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#window_duration DataDatabricksFeatureEngineeringFeature#window_duration}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous.property.offset">Offset</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#offset DataDatabricksFeatureEngineeringFeature#offset}. |

---

##### `WindowDuration`<sup>Required</sup> <a name="WindowDuration" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous.property.windowDuration"></a>

```go
WindowDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#window_duration DataDatabricksFeatureEngineeringFeature#window_duration}.

---

##### `Offset`<sup>Optional</sup> <a name="Offset" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous.property.offset"></a>

```go
Offset *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#offset DataDatabricksFeatureEngineeringFeature#offset}.

---

### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding {
	SlideDuration: *string,
	WindowDuration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding.property.slideDuration">SlideDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#slide_duration DataDatabricksFeatureEngineeringFeature#slide_duration}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding.property.windowDuration">WindowDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#window_duration DataDatabricksFeatureEngineeringFeature#window_duration}. |

---

##### `SlideDuration`<sup>Required</sup> <a name="SlideDuration" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding.property.slideDuration"></a>

```go
SlideDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#slide_duration DataDatabricksFeatureEngineeringFeature#slide_duration}.

---

##### `WindowDuration`<sup>Required</sup> <a name="WindowDuration" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding.property.windowDuration"></a>

```go
WindowDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#window_duration DataDatabricksFeatureEngineeringFeature#window_duration}.

---

### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling {
	WindowDuration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling.property.windowDuration">WindowDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#window_duration DataDatabricksFeatureEngineeringFeature#window_duration}. |

---

##### `WindowDuration`<sup>Required</sup> <a name="WindowDuration" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling.property.windowDuration"></a>

```go
WindowDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#window_duration DataDatabricksFeatureEngineeringFeature#window_duration}.

---

### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPop <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPop" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPop"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPop.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPop {
	Input: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPop.property.input">Input</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}. |

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPop.property.input"></a>

```go
Input *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}.

---

### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSamp <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSamp" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSamp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSamp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSamp {
	Input: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSamp.property.input">Input</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}. |

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSamp.property.input"></a>

```go
Input *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}.

---

### DataDatabricksFeatureEngineeringFeatureFunctionColumnSelection <a name="DataDatabricksFeatureEngineeringFeatureFunctionColumnSelection" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelection {
	Column: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelection.property.column">Column</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#column DataDatabricksFeatureEngineeringFeature#column}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelection.property.column"></a>

```go
Column *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#column DataDatabricksFeatureEngineeringFeature#column}.

---

### DataDatabricksFeatureEngineeringFeatureFunctionExtraParameters <a name="DataDatabricksFeatureEngineeringFeatureFunctionExtraParameters" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParameters {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParameters.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#key DataDatabricksFeatureEngineeringFeature#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParameters.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#value DataDatabricksFeatureEngineeringFeature#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParameters.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#key DataDatabricksFeatureEngineeringFeature#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParameters.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#value DataDatabricksFeatureEngineeringFeature#value}.

---

### DataDatabricksFeatureEngineeringFeatureLineageContext <a name="DataDatabricksFeatureEngineeringFeatureLineageContext" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContext.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureLineageContext {
	JobContext: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContext,
	NotebookId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContext.property.jobContext">JobContext</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContext">DataDatabricksFeatureEngineeringFeatureLineageContextJobContext</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#job_context DataDatabricksFeatureEngineeringFeature#job_context}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContext.property.notebookId">NotebookId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#notebook_id DataDatabricksFeatureEngineeringFeature#notebook_id}. |

---

##### `JobContext`<sup>Optional</sup> <a name="JobContext" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContext.property.jobContext"></a>

```go
JobContext DataDatabricksFeatureEngineeringFeatureLineageContextJobContext
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContext">DataDatabricksFeatureEngineeringFeatureLineageContextJobContext</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#job_context DataDatabricksFeatureEngineeringFeature#job_context}.

---

##### `NotebookId`<sup>Optional</sup> <a name="NotebookId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContext.property.notebookId"></a>

```go
NotebookId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#notebook_id DataDatabricksFeatureEngineeringFeature#notebook_id}.

---

### DataDatabricksFeatureEngineeringFeatureLineageContextJobContext <a name="DataDatabricksFeatureEngineeringFeatureLineageContextJobContext" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContext.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContext {
	JobId: *f64,
	JobRunId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContext.property.jobId">JobId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#job_id DataDatabricksFeatureEngineeringFeature#job_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContext.property.jobRunId">JobRunId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#job_run_id DataDatabricksFeatureEngineeringFeature#job_run_id}. |

---

##### `JobId`<sup>Optional</sup> <a name="JobId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContext.property.jobId"></a>

```go
JobId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#job_id DataDatabricksFeatureEngineeringFeature#job_id}.

---

##### `JobRunId`<sup>Optional</sup> <a name="JobRunId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContext.property.jobRunId"></a>

```go
JobRunId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#job_run_id DataDatabricksFeatureEngineeringFeature#job_run_id}.

---

### DataDatabricksFeatureEngineeringFeatureProviderConfig <a name="DataDatabricksFeatureEngineeringFeatureProviderConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#workspace_id DataDatabricksFeatureEngineeringFeature#workspace_id}. |

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#workspace_id DataDatabricksFeatureEngineeringFeature#workspace_id}.

---

### DataDatabricksFeatureEngineeringFeatureSource <a name="DataDatabricksFeatureEngineeringFeatureSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureSource {
	DeltaTableSource: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource,
	KafkaSource: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSource,
	RequestSource: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSource.property.deltaTableSource">DeltaTableSource</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource">DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#delta_table_source DataDatabricksFeatureEngineeringFeature#delta_table_source}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSource.property.kafkaSource">KafkaSource</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSource">DataDatabricksFeatureEngineeringFeatureSourceKafkaSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#kafka_source DataDatabricksFeatureEngineeringFeature#kafka_source}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSource.property.requestSource">RequestSource</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSource">DataDatabricksFeatureEngineeringFeatureSourceRequestSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#request_source DataDatabricksFeatureEngineeringFeature#request_source}. |

---

##### `DeltaTableSource`<sup>Optional</sup> <a name="DeltaTableSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSource.property.deltaTableSource"></a>

```go
DeltaTableSource DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource">DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#delta_table_source DataDatabricksFeatureEngineeringFeature#delta_table_source}.

---

##### `KafkaSource`<sup>Optional</sup> <a name="KafkaSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSource.property.kafkaSource"></a>

```go
KafkaSource DataDatabricksFeatureEngineeringFeatureSourceKafkaSource
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSource">DataDatabricksFeatureEngineeringFeatureSourceKafkaSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#kafka_source DataDatabricksFeatureEngineeringFeature#kafka_source}.

---

##### `RequestSource`<sup>Optional</sup> <a name="RequestSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSource.property.requestSource"></a>

```go
RequestSource DataDatabricksFeatureEngineeringFeatureSourceRequestSource
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSource">DataDatabricksFeatureEngineeringFeatureSourceRequestSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#request_source DataDatabricksFeatureEngineeringFeature#request_source}.

---

### DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource <a name="DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource {
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
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource.property.fullName">FullName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#full_name DataDatabricksFeatureEngineeringFeature#full_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource.property.dataframeSchema">DataframeSchema</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#dataframe_schema DataDatabricksFeatureEngineeringFeature#dataframe_schema}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource.property.entityColumns">EntityColumns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#entity_columns DataDatabricksFeatureEngineeringFeature#entity_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource.property.filterCondition">FilterCondition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#filter_condition DataDatabricksFeatureEngineeringFeature#filter_condition}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource.property.timeseriesColumn">TimeseriesColumn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#timeseries_column DataDatabricksFeatureEngineeringFeature#timeseries_column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource.property.transformationSql">TransformationSql</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#transformation_sql DataDatabricksFeatureEngineeringFeature#transformation_sql}. |

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource.property.fullName"></a>

```go
FullName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#full_name DataDatabricksFeatureEngineeringFeature#full_name}.

---

##### `DataframeSchema`<sup>Optional</sup> <a name="DataframeSchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource.property.dataframeSchema"></a>

```go
DataframeSchema *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#dataframe_schema DataDatabricksFeatureEngineeringFeature#dataframe_schema}.

---

##### `EntityColumns`<sup>Optional</sup> <a name="EntityColumns" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource.property.entityColumns"></a>

```go
EntityColumns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#entity_columns DataDatabricksFeatureEngineeringFeature#entity_columns}.

---

##### `FilterCondition`<sup>Optional</sup> <a name="FilterCondition" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource.property.filterCondition"></a>

```go
FilterCondition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#filter_condition DataDatabricksFeatureEngineeringFeature#filter_condition}.

---

##### `TimeseriesColumn`<sup>Optional</sup> <a name="TimeseriesColumn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource.property.timeseriesColumn"></a>

```go
TimeseriesColumn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#timeseries_column DataDatabricksFeatureEngineeringFeature#timeseries_column}.

---

##### `TransformationSql`<sup>Optional</sup> <a name="TransformationSql" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource.property.transformationSql"></a>

```go
TransformationSql *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#transformation_sql DataDatabricksFeatureEngineeringFeature#transformation_sql}.

---

### DataDatabricksFeatureEngineeringFeatureSourceKafkaSource <a name="DataDatabricksFeatureEngineeringFeatureSourceKafkaSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSource {
	Name: *string,
	EntityColumnIdentifiers: interface{},
	FilterCondition: *string,
	TimeseriesColumnIdentifier: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSource.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#name DataDatabricksFeatureEngineeringFeature#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSource.property.entityColumnIdentifiers">EntityColumnIdentifiers</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#entity_column_identifiers DataDatabricksFeatureEngineeringFeature#entity_column_identifiers}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSource.property.filterCondition">FilterCondition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#filter_condition DataDatabricksFeatureEngineeringFeature#filter_condition}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSource.property.timeseriesColumnIdentifier">TimeseriesColumnIdentifier</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier">DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#timeseries_column_identifier DataDatabricksFeatureEngineeringFeature#timeseries_column_identifier}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSource.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#name DataDatabricksFeatureEngineeringFeature#name}.

---

##### `EntityColumnIdentifiers`<sup>Optional</sup> <a name="EntityColumnIdentifiers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSource.property.entityColumnIdentifiers"></a>

```go
EntityColumnIdentifiers interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#entity_column_identifiers DataDatabricksFeatureEngineeringFeature#entity_column_identifiers}.

---

##### `FilterCondition`<sup>Optional</sup> <a name="FilterCondition" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSource.property.filterCondition"></a>

```go
FilterCondition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#filter_condition DataDatabricksFeatureEngineeringFeature#filter_condition}.

---

##### `TimeseriesColumnIdentifier`<sup>Optional</sup> <a name="TimeseriesColumnIdentifier" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSource.property.timeseriesColumnIdentifier"></a>

```go
TimeseriesColumnIdentifier DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier">DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#timeseries_column_identifier DataDatabricksFeatureEngineeringFeature#timeseries_column_identifier}.

---

### DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers <a name="DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers {
	VariantExprPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers.property.variantExprPath">VariantExprPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#variant_expr_path DataDatabricksFeatureEngineeringFeature#variant_expr_path}. |

---

##### `VariantExprPath`<sup>Required</sup> <a name="VariantExprPath" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers.property.variantExprPath"></a>

```go
VariantExprPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#variant_expr_path DataDatabricksFeatureEngineeringFeature#variant_expr_path}.

---

### DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier <a name="DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier {
	VariantExprPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier.property.variantExprPath">VariantExprPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#variant_expr_path DataDatabricksFeatureEngineeringFeature#variant_expr_path}. |

---

##### `VariantExprPath`<sup>Required</sup> <a name="VariantExprPath" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier.property.variantExprPath"></a>

```go
VariantExprPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#variant_expr_path DataDatabricksFeatureEngineeringFeature#variant_expr_path}.

---

### DataDatabricksFeatureEngineeringFeatureSourceRequestSource <a name="DataDatabricksFeatureEngineeringFeatureSourceRequestSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSource {
	FlatSchema: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchema,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSource.property.flatSchema">FlatSchema</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchema">DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#flat_schema DataDatabricksFeatureEngineeringFeature#flat_schema}. |

---

##### `FlatSchema`<sup>Optional</sup> <a name="FlatSchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSource.property.flatSchema"></a>

```go
FlatSchema DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchema
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchema">DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#flat_schema DataDatabricksFeatureEngineeringFeature#flat_schema}.

---

### DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchema <a name="DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchema {
	Fields: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchema.property.fields">Fields</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#fields DataDatabricksFeatureEngineeringFeature#fields}. |

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchema.property.fields"></a>

```go
Fields interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#fields DataDatabricksFeatureEngineeringFeature#fields}.

---

### DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields <a name="DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields {
	DataType: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields.property.dataType">DataType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#data_type DataDatabricksFeatureEngineeringFeature#data_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#name DataDatabricksFeatureEngineeringFeature#name}. |

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields.property.dataType"></a>

```go
DataType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#data_type DataDatabricksFeatureEngineeringFeature#data_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#name DataDatabricksFeatureEngineeringFeature#name}.

---

### DataDatabricksFeatureEngineeringFeatureTimeseriesColumn <a name="DataDatabricksFeatureEngineeringFeatureTimeseriesColumn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumn {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumn.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#name DataDatabricksFeatureEngineeringFeature#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumn.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#name DataDatabricksFeatureEngineeringFeature#name}.

---

### DataDatabricksFeatureEngineeringFeatureTimeWindow <a name="DataDatabricksFeatureEngineeringFeatureTimeWindow" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureTimeWindow {
	Continuous: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuous,
	Sliding: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSliding,
	Tumbling: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumbling,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindow.property.continuous">Continuous</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuous">DataDatabricksFeatureEngineeringFeatureTimeWindowContinuous</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#continuous DataDatabricksFeatureEngineeringFeature#continuous}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindow.property.sliding">Sliding</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSliding">DataDatabricksFeatureEngineeringFeatureTimeWindowSliding</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#sliding DataDatabricksFeatureEngineeringFeature#sliding}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindow.property.tumbling">Tumbling</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumbling">DataDatabricksFeatureEngineeringFeatureTimeWindowTumbling</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#tumbling DataDatabricksFeatureEngineeringFeature#tumbling}. |

---

##### `Continuous`<sup>Optional</sup> <a name="Continuous" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindow.property.continuous"></a>

```go
Continuous DataDatabricksFeatureEngineeringFeatureTimeWindowContinuous
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuous">DataDatabricksFeatureEngineeringFeatureTimeWindowContinuous</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#continuous DataDatabricksFeatureEngineeringFeature#continuous}.

---

##### `Sliding`<sup>Optional</sup> <a name="Sliding" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindow.property.sliding"></a>

```go
Sliding DataDatabricksFeatureEngineeringFeatureTimeWindowSliding
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSliding">DataDatabricksFeatureEngineeringFeatureTimeWindowSliding</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#sliding DataDatabricksFeatureEngineeringFeature#sliding}.

---

##### `Tumbling`<sup>Optional</sup> <a name="Tumbling" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindow.property.tumbling"></a>

```go
Tumbling DataDatabricksFeatureEngineeringFeatureTimeWindowTumbling
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumbling">DataDatabricksFeatureEngineeringFeatureTimeWindowTumbling</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#tumbling DataDatabricksFeatureEngineeringFeature#tumbling}.

---

### DataDatabricksFeatureEngineeringFeatureTimeWindowContinuous <a name="DataDatabricksFeatureEngineeringFeatureTimeWindowContinuous" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuous"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuous.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuous {
	WindowDuration: *string,
	Offset: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuous.property.windowDuration">WindowDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#window_duration DataDatabricksFeatureEngineeringFeature#window_duration}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuous.property.offset">Offset</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#offset DataDatabricksFeatureEngineeringFeature#offset}. |

---

##### `WindowDuration`<sup>Required</sup> <a name="WindowDuration" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuous.property.windowDuration"></a>

```go
WindowDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#window_duration DataDatabricksFeatureEngineeringFeature#window_duration}.

---

##### `Offset`<sup>Optional</sup> <a name="Offset" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuous.property.offset"></a>

```go
Offset *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#offset DataDatabricksFeatureEngineeringFeature#offset}.

---

### DataDatabricksFeatureEngineeringFeatureTimeWindowSliding <a name="DataDatabricksFeatureEngineeringFeatureTimeWindowSliding" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSliding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSliding.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSliding {
	SlideDuration: *string,
	WindowDuration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSliding.property.slideDuration">SlideDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#slide_duration DataDatabricksFeatureEngineeringFeature#slide_duration}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSliding.property.windowDuration">WindowDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#window_duration DataDatabricksFeatureEngineeringFeature#window_duration}. |

---

##### `SlideDuration`<sup>Required</sup> <a name="SlideDuration" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSliding.property.slideDuration"></a>

```go
SlideDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#slide_duration DataDatabricksFeatureEngineeringFeature#slide_duration}.

---

##### `WindowDuration`<sup>Required</sup> <a name="WindowDuration" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSliding.property.windowDuration"></a>

```go
WindowDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#window_duration DataDatabricksFeatureEngineeringFeature#window_duration}.

---

### DataDatabricksFeatureEngineeringFeatureTimeWindowTumbling <a name="DataDatabricksFeatureEngineeringFeatureTimeWindowTumbling" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumbling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumbling.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

&datadatabricksfeatureengineeringfeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumbling {
	WindowDuration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumbling.property.windowDuration">WindowDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#window_duration DataDatabricksFeatureEngineeringFeature#window_duration}. |

---

##### `WindowDuration`<sup>Required</sup> <a name="WindowDuration" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumbling.property.windowDuration"></a>

```go
WindowDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/feature_engineering_feature#window_duration DataDatabricksFeatureEngineeringFeature#window_duration}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksFeatureEngineeringFeatureEntitiesList <a name="DataDatabricksFeatureEngineeringFeatureEntitiesList" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureEntitiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksFeatureEngineeringFeatureEntitiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesList.get"></a>

```go
func Get(index *f64) DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference <a name="DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureEntitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntities">DataDatabricksFeatureEngineeringFeatureEntities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksFeatureEngineeringFeatureEntities
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureEntities">DataDatabricksFeatureEngineeringFeatureEntities</a>

---


### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.resetRelativeSd">ResetRelativeSd</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRelativeSd` <a name="ResetRelativeSd" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.resetRelativeSd"></a>

```go
func ResetRelativeSd()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.property.inputInput">InputInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.property.relativeSdInput">RelativeSdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.property.input">Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.property.relativeSd">RelativeSd</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.property.inputInput"></a>

```go
func InputInput() *string
```

- *Type:* *string

---

##### `RelativeSdInput`<sup>Optional</sup> <a name="RelativeSdInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.property.relativeSdInput"></a>

```go
func RelativeSdInput() *f64
```

- *Type:* *f64

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.property.input"></a>

```go
func Input() *string
```

- *Type:* *string

---

##### `RelativeSd`<sup>Required</sup> <a name="RelativeSd" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.property.relativeSd"></a>

```go
func RelativeSd() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.resetAccuracy">ResetAccuracy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccuracy` <a name="ResetAccuracy" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.resetAccuracy"></a>

```go
func ResetAccuracy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.accuracyInput">AccuracyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.inputInput">InputInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.percentileInput">PercentileInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.accuracy">Accuracy</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.input">Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.percentile">Percentile</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccuracyInput`<sup>Optional</sup> <a name="AccuracyInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.accuracyInput"></a>

```go
func AccuracyInput() *f64
```

- *Type:* *f64

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.inputInput"></a>

```go
func InputInput() *string
```

- *Type:* *string

---

##### `PercentileInput`<sup>Optional</sup> <a name="PercentileInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.percentileInput"></a>

```go
func PercentileInput() *f64
```

- *Type:* *f64

---

##### `Accuracy`<sup>Required</sup> <a name="Accuracy" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.accuracy"></a>

```go
func Accuracy() *f64
```

- *Type:* *f64

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.input"></a>

```go
func Input() *string
```

- *Type:* *string

---

##### `Percentile`<sup>Required</sup> <a name="Percentile" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.percentile"></a>

```go
func Percentile() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.property.inputInput">InputInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.property.input">Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.property.inputInput"></a>

```go
func InputInput() *string
```

- *Type:* *string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.property.input"></a>

```go
func Input() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.property.inputInput">InputInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.property.input">Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.property.inputInput"></a>

```go
func InputInput() *string
```

- *Type:* *string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.property.input"></a>

```go
func Input() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.property.inputInput">InputInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.property.input">Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.property.inputInput"></a>

```go
func InputInput() *string
```

- *Type:* *string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.property.input"></a>

```go
func Input() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.property.inputInput">InputInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.property.input">Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.property.inputInput"></a>

```go
func InputInput() *string
```

- *Type:* *string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.property.input"></a>

```go
func Input() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.property.inputInput">InputInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.property.input">Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.property.inputInput"></a>

```go
func InputInput() *string
```

- *Type:* *string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.property.input"></a>

```go
func Input() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.property.inputInput">InputInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.property.input">Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.property.inputInput"></a>

```go
func InputInput() *string
```

- *Type:* *string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.property.input"></a>

```go
func Input() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putApproxCountDistinct">PutApproxCountDistinct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putApproxPercentile">PutApproxPercentile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putAvg">PutAvg</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putCountFunction">PutCountFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putFirst">PutFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putLast">PutLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putMax">PutMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putMin">PutMin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putStddevPop">PutStddevPop</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putStddevSamp">PutStddevSamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putSum">PutSum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putTimeWindow">PutTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putVarPop">PutVarPop</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putVarSamp">PutVarSamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetApproxCountDistinct">ResetApproxCountDistinct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetApproxPercentile">ResetApproxPercentile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetAvg">ResetAvg</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetCountFunction">ResetCountFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetFirst">ResetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetLast">ResetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetMin">ResetMin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetStddevPop">ResetStddevPop</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetStddevSamp">ResetStddevSamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetSum">ResetSum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetTimeWindow">ResetTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetVarPop">ResetVarPop</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetVarSamp">ResetVarSamp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApproxCountDistinct` <a name="PutApproxCountDistinct" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putApproxCountDistinct"></a>

```go
func PutApproxCountDistinct(value DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putApproxCountDistinct.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct</a>

---

##### `PutApproxPercentile` <a name="PutApproxPercentile" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putApproxPercentile"></a>

```go
func PutApproxPercentile(value DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putApproxPercentile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile</a>

---

##### `PutAvg` <a name="PutAvg" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putAvg"></a>

```go
func PutAvg(value DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvg)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putAvg.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvg">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvg</a>

---

##### `PutCountFunction` <a name="PutCountFunction" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putCountFunction"></a>

```go
func PutCountFunction(value DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putCountFunction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunction">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunction</a>

---

##### `PutFirst` <a name="PutFirst" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putFirst"></a>

```go
func PutFirst(value DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirst)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putFirst.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirst">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirst</a>

---

##### `PutLast` <a name="PutLast" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putLast"></a>

```go
func PutLast(value DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLast)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putLast.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLast">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLast</a>

---

##### `PutMax` <a name="PutMax" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putMax"></a>

```go
func PutMax(value DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMax)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putMax.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMax">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMax</a>

---

##### `PutMin` <a name="PutMin" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putMin"></a>

```go
func PutMin(value DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMin)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putMin.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMin">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMin</a>

---

##### `PutStddevPop` <a name="PutStddevPop" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putStddevPop"></a>

```go
func PutStddevPop(value DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPop)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putStddevPop.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPop">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPop</a>

---

##### `PutStddevSamp` <a name="PutStddevSamp" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putStddevSamp"></a>

```go
func PutStddevSamp(value DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putStddevSamp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp</a>

---

##### `PutSum` <a name="PutSum" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putSum"></a>

```go
func PutSum(value DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSum)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putSum.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSum">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSum</a>

---

##### `PutTimeWindow` <a name="PutTimeWindow" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putTimeWindow"></a>

```go
func PutTimeWindow(value DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putTimeWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow</a>

---

##### `PutVarPop` <a name="PutVarPop" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putVarPop"></a>

```go
func PutVarPop(value DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPop)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putVarPop.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPop">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPop</a>

---

##### `PutVarSamp` <a name="PutVarSamp" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putVarSamp"></a>

```go
func PutVarSamp(value DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSamp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putVarSamp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSamp">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSamp</a>

---

##### `ResetApproxCountDistinct` <a name="ResetApproxCountDistinct" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetApproxCountDistinct"></a>

```go
func ResetApproxCountDistinct()
```

##### `ResetApproxPercentile` <a name="ResetApproxPercentile" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetApproxPercentile"></a>

```go
func ResetApproxPercentile()
```

##### `ResetAvg` <a name="ResetAvg" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetAvg"></a>

```go
func ResetAvg()
```

##### `ResetCountFunction` <a name="ResetCountFunction" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetCountFunction"></a>

```go
func ResetCountFunction()
```

##### `ResetFirst` <a name="ResetFirst" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetFirst"></a>

```go
func ResetFirst()
```

##### `ResetLast` <a name="ResetLast" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetLast"></a>

```go
func ResetLast()
```

##### `ResetMax` <a name="ResetMax" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetMax"></a>

```go
func ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetMin"></a>

```go
func ResetMin()
```

##### `ResetStddevPop` <a name="ResetStddevPop" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetStddevPop"></a>

```go
func ResetStddevPop()
```

##### `ResetStddevSamp` <a name="ResetStddevSamp" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetStddevSamp"></a>

```go
func ResetStddevSamp()
```

##### `ResetSum` <a name="ResetSum" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetSum"></a>

```go
func ResetSum()
```

##### `ResetTimeWindow` <a name="ResetTimeWindow" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetTimeWindow"></a>

```go
func ResetTimeWindow()
```

##### `ResetVarPop` <a name="ResetVarPop" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetVarPop"></a>

```go
func ResetVarPop()
```

##### `ResetVarSamp` <a name="ResetVarSamp" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetVarSamp"></a>

```go
func ResetVarSamp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.approxCountDistinct">ApproxCountDistinct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.approxPercentile">ApproxPercentile</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.avg">Avg</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.countFunction">CountFunction</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.first">First</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.last">Last</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.max">Max</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.min">Min</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.stddevPop">StddevPop</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.stddevSamp">StddevSamp</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.sum">Sum</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.timeWindow">TimeWindow</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.varPop">VarPop</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.varSamp">VarSamp</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.approxCountDistinctInput">ApproxCountDistinctInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.approxPercentileInput">ApproxPercentileInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.avgInput">AvgInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.countFunctionInput">CountFunctionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.firstInput">FirstInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.lastInput">LastInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.maxInput">MaxInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.minInput">MinInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.stddevPopInput">StddevPopInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.stddevSampInput">StddevSampInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.sumInput">SumInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.timeWindowInput">TimeWindowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.varPopInput">VarPopInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.varSampInput">VarSampInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApproxCountDistinct`<sup>Required</sup> <a name="ApproxCountDistinct" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.approxCountDistinct"></a>

```go
func ApproxCountDistinct() DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference</a>

---

##### `ApproxPercentile`<sup>Required</sup> <a name="ApproxPercentile" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.approxPercentile"></a>

```go
func ApproxPercentile() DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference</a>

---

##### `Avg`<sup>Required</sup> <a name="Avg" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.avg"></a>

```go
func Avg() DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference</a>

---

##### `CountFunction`<sup>Required</sup> <a name="CountFunction" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.countFunction"></a>

```go
func CountFunction() DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference</a>

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.first"></a>

```go
func First() DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference</a>

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.last"></a>

```go
func Last() DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference</a>

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.max"></a>

```go
func Max() DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference</a>

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.min"></a>

```go
func Min() DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference</a>

---

##### `StddevPop`<sup>Required</sup> <a name="StddevPop" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.stddevPop"></a>

```go
func StddevPop() DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference</a>

---

##### `StddevSamp`<sup>Required</sup> <a name="StddevSamp" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.stddevSamp"></a>

```go
func StddevSamp() DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference</a>

---

##### `Sum`<sup>Required</sup> <a name="Sum" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.sum"></a>

```go
func Sum() DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference</a>

---

##### `TimeWindow`<sup>Required</sup> <a name="TimeWindow" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.timeWindow"></a>

```go
func TimeWindow() DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference</a>

---

##### `VarPop`<sup>Required</sup> <a name="VarPop" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.varPop"></a>

```go
func VarPop() DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference</a>

---

##### `VarSamp`<sup>Required</sup> <a name="VarSamp" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.varSamp"></a>

```go
func VarSamp() DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference</a>

---

##### `ApproxCountDistinctInput`<sup>Optional</sup> <a name="ApproxCountDistinctInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.approxCountDistinctInput"></a>

```go
func ApproxCountDistinctInput() interface{}
```

- *Type:* interface{}

---

##### `ApproxPercentileInput`<sup>Optional</sup> <a name="ApproxPercentileInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.approxPercentileInput"></a>

```go
func ApproxPercentileInput() interface{}
```

- *Type:* interface{}

---

##### `AvgInput`<sup>Optional</sup> <a name="AvgInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.avgInput"></a>

```go
func AvgInput() interface{}
```

- *Type:* interface{}

---

##### `CountFunctionInput`<sup>Optional</sup> <a name="CountFunctionInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.countFunctionInput"></a>

```go
func CountFunctionInput() interface{}
```

- *Type:* interface{}

---

##### `FirstInput`<sup>Optional</sup> <a name="FirstInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.firstInput"></a>

```go
func FirstInput() interface{}
```

- *Type:* interface{}

---

##### `LastInput`<sup>Optional</sup> <a name="LastInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.lastInput"></a>

```go
func LastInput() interface{}
```

- *Type:* interface{}

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.maxInput"></a>

```go
func MaxInput() interface{}
```

- *Type:* interface{}

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.minInput"></a>

```go
func MinInput() interface{}
```

- *Type:* interface{}

---

##### `StddevPopInput`<sup>Optional</sup> <a name="StddevPopInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.stddevPopInput"></a>

```go
func StddevPopInput() interface{}
```

- *Type:* interface{}

---

##### `StddevSampInput`<sup>Optional</sup> <a name="StddevSampInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.stddevSampInput"></a>

```go
func StddevSampInput() interface{}
```

- *Type:* interface{}

---

##### `SumInput`<sup>Optional</sup> <a name="SumInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.sumInput"></a>

```go
func SumInput() interface{}
```

- *Type:* interface{}

---

##### `TimeWindowInput`<sup>Optional</sup> <a name="TimeWindowInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.timeWindowInput"></a>

```go
func TimeWindowInput() interface{}
```

- *Type:* interface{}

---

##### `VarPopInput`<sup>Optional</sup> <a name="VarPopInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.varPopInput"></a>

```go
func VarPopInput() interface{}
```

- *Type:* interface{}

---

##### `VarSampInput`<sup>Optional</sup> <a name="VarSampInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.varSampInput"></a>

```go
func VarSampInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.property.inputInput">InputInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.property.input">Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.property.inputInput"></a>

```go
func InputInput() *string
```

- *Type:* *string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.property.input"></a>

```go
func Input() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.property.inputInput">InputInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.property.input">Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.property.inputInput"></a>

```go
func InputInput() *string
```

- *Type:* *string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.property.input"></a>

```go
func Input() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.property.inputInput">InputInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.property.input">Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.property.inputInput"></a>

```go
func InputInput() *string
```

- *Type:* *string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.property.input"></a>

```go
func Input() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.resetOffset">ResetOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOffset` <a name="ResetOffset" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.resetOffset"></a>

```go
func ResetOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.property.offsetInput">OffsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.property.windowDurationInput">WindowDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.property.offset">Offset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.property.windowDuration">WindowDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OffsetInput`<sup>Optional</sup> <a name="OffsetInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.property.offsetInput"></a>

```go
func OffsetInput() *string
```

- *Type:* *string

---

##### `WindowDurationInput`<sup>Optional</sup> <a name="WindowDurationInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.property.windowDurationInput"></a>

```go
func WindowDurationInput() *string
```

- *Type:* *string

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.property.offset"></a>

```go
func Offset() *string
```

- *Type:* *string

---

##### `WindowDuration`<sup>Required</sup> <a name="WindowDuration" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.property.windowDuration"></a>

```go
func WindowDuration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.putContinuous">PutContinuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.putSliding">PutSliding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.putTumbling">PutTumbling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.resetContinuous">ResetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.resetSliding">ResetSliding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.resetTumbling">ResetTumbling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContinuous` <a name="PutContinuous" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.putContinuous"></a>

```go
func PutContinuous(value DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.putContinuous.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous</a>

---

##### `PutSliding` <a name="PutSliding" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.putSliding"></a>

```go
func PutSliding(value DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.putSliding.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding</a>

---

##### `PutTumbling` <a name="PutTumbling" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.putTumbling"></a>

```go
func PutTumbling(value DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.putTumbling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling</a>

---

##### `ResetContinuous` <a name="ResetContinuous" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.resetContinuous"></a>

```go
func ResetContinuous()
```

##### `ResetSliding` <a name="ResetSliding" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.resetSliding"></a>

```go
func ResetSliding()
```

##### `ResetTumbling` <a name="ResetTumbling" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.resetTumbling"></a>

```go
func ResetTumbling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.continuous">Continuous</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.sliding">Sliding</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.tumbling">Tumbling</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.continuousInput">ContinuousInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.slidingInput">SlidingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.tumblingInput">TumblingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Continuous`<sup>Required</sup> <a name="Continuous" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.continuous"></a>

```go
func Continuous() DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference</a>

---

##### `Sliding`<sup>Required</sup> <a name="Sliding" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.sliding"></a>

```go
func Sliding() DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference</a>

---

##### `Tumbling`<sup>Required</sup> <a name="Tumbling" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.tumbling"></a>

```go
func Tumbling() DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference</a>

---

##### `ContinuousInput`<sup>Optional</sup> <a name="ContinuousInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.continuousInput"></a>

```go
func ContinuousInput() interface{}
```

- *Type:* interface{}

---

##### `SlidingInput`<sup>Optional</sup> <a name="SlidingInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.slidingInput"></a>

```go
func SlidingInput() interface{}
```

- *Type:* interface{}

---

##### `TumblingInput`<sup>Optional</sup> <a name="TumblingInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.tumblingInput"></a>

```go
func TumblingInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.property.slideDurationInput">SlideDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.property.windowDurationInput">WindowDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.property.slideDuration">SlideDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.property.windowDuration">WindowDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SlideDurationInput`<sup>Optional</sup> <a name="SlideDurationInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.property.slideDurationInput"></a>

```go
func SlideDurationInput() *string
```

- *Type:* *string

---

##### `WindowDurationInput`<sup>Optional</sup> <a name="WindowDurationInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.property.windowDurationInput"></a>

```go
func WindowDurationInput() *string
```

- *Type:* *string

---

##### `SlideDuration`<sup>Required</sup> <a name="SlideDuration" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.property.slideDuration"></a>

```go
func SlideDuration() *string
```

- *Type:* *string

---

##### `WindowDuration`<sup>Required</sup> <a name="WindowDuration" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.property.windowDuration"></a>

```go
func WindowDuration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.property.windowDurationInput">WindowDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.property.windowDuration">WindowDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WindowDurationInput`<sup>Optional</sup> <a name="WindowDurationInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.property.windowDurationInput"></a>

```go
func WindowDurationInput() *string
```

- *Type:* *string

---

##### `WindowDuration`<sup>Required</sup> <a name="WindowDuration" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.property.windowDuration"></a>

```go
func WindowDuration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.property.inputInput">InputInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.property.input">Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.property.inputInput"></a>

```go
func InputInput() *string
```

- *Type:* *string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.property.input"></a>

```go
func Input() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference <a name="DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.property.inputInput">InputInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.property.input">Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.property.inputInput"></a>

```go
func InputInput() *string
```

- *Type:* *string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.property.input"></a>

```go
func Input() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference <a name="DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.property.columnInput">ColumnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.property.column">Column</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.property.columnInput"></a>

```go
func ColumnInput() *string
```

- *Type:* *string

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.property.column"></a>

```go
func Column() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList <a name="DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList.get"></a>

```go
func Get(index *f64) DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference <a name="DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureFunctionOutputReference <a name="DataDatabricksFeatureEngineeringFeatureFunctionOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureFunctionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureFunctionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.putAggregationFunction">PutAggregationFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.putColumnSelection">PutColumnSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.putExtraParameters">PutExtraParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.resetAggregationFunction">ResetAggregationFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.resetColumnSelection">ResetColumnSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.resetExtraParameters">ResetExtraParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.resetFunctionType">ResetFunctionType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAggregationFunction` <a name="PutAggregationFunction" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.putAggregationFunction"></a>

```go
func PutAggregationFunction(value DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.putAggregationFunction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction</a>

---

##### `PutColumnSelection` <a name="PutColumnSelection" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.putColumnSelection"></a>

```go
func PutColumnSelection(value DataDatabricksFeatureEngineeringFeatureFunctionColumnSelection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.putColumnSelection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelection">DataDatabricksFeatureEngineeringFeatureFunctionColumnSelection</a>

---

##### `PutExtraParameters` <a name="PutExtraParameters" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.putExtraParameters"></a>

```go
func PutExtraParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.putExtraParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAggregationFunction` <a name="ResetAggregationFunction" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.resetAggregationFunction"></a>

```go
func ResetAggregationFunction()
```

##### `ResetColumnSelection` <a name="ResetColumnSelection" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.resetColumnSelection"></a>

```go
func ResetColumnSelection()
```

##### `ResetExtraParameters` <a name="ResetExtraParameters" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.resetExtraParameters"></a>

```go
func ResetExtraParameters()
```

##### `ResetFunctionType` <a name="ResetFunctionType" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.resetFunctionType"></a>

```go
func ResetFunctionType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.property.aggregationFunction">AggregationFunction</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.property.columnSelection">ColumnSelection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.property.extraParameters">ExtraParameters</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList">DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.property.aggregationFunctionInput">AggregationFunctionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.property.columnSelectionInput">ColumnSelectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.property.extraParametersInput">ExtraParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.property.functionTypeInput">FunctionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.property.functionType">FunctionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunction">DataDatabricksFeatureEngineeringFeatureFunction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggregationFunction`<sup>Required</sup> <a name="AggregationFunction" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.property.aggregationFunction"></a>

```go
func AggregationFunction() DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference</a>

---

##### `ColumnSelection`<sup>Required</sup> <a name="ColumnSelection" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.property.columnSelection"></a>

```go
func ColumnSelection() DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference">DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference</a>

---

##### `ExtraParameters`<sup>Required</sup> <a name="ExtraParameters" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.property.extraParameters"></a>

```go
func ExtraParameters() DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList">DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList</a>

---

##### `AggregationFunctionInput`<sup>Optional</sup> <a name="AggregationFunctionInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.property.aggregationFunctionInput"></a>

```go
func AggregationFunctionInput() interface{}
```

- *Type:* interface{}

---

##### `ColumnSelectionInput`<sup>Optional</sup> <a name="ColumnSelectionInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.property.columnSelectionInput"></a>

```go
func ColumnSelectionInput() interface{}
```

- *Type:* interface{}

---

##### `ExtraParametersInput`<sup>Optional</sup> <a name="ExtraParametersInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.property.extraParametersInput"></a>

```go
func ExtraParametersInput() interface{}
```

- *Type:* interface{}

---

##### `FunctionTypeInput`<sup>Optional</sup> <a name="FunctionTypeInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.property.functionTypeInput"></a>

```go
func FunctionTypeInput() *string
```

- *Type:* *string

---

##### `FunctionType`<sup>Required</sup> <a name="FunctionType" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.property.functionType"></a>

```go
func FunctionType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunctionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksFeatureEngineeringFeatureFunction
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureFunction">DataDatabricksFeatureEngineeringFeatureFunction</a>

---


### DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference <a name="DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.resetJobId">ResetJobId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.resetJobRunId">ResetJobRunId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJobId` <a name="ResetJobId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.resetJobId"></a>

```go
func ResetJobId()
```

##### `ResetJobRunId` <a name="ResetJobRunId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.resetJobRunId"></a>

```go
func ResetJobRunId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.property.jobIdInput">JobIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.property.jobRunIdInput">JobRunIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.property.jobId">JobId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.property.jobRunId">JobRunId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JobIdInput`<sup>Optional</sup> <a name="JobIdInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.property.jobIdInput"></a>

```go
func JobIdInput() *f64
```

- *Type:* *f64

---

##### `JobRunIdInput`<sup>Optional</sup> <a name="JobRunIdInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.property.jobRunIdInput"></a>

```go
func JobRunIdInput() *f64
```

- *Type:* *f64

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.property.jobId"></a>

```go
func JobId() *f64
```

- *Type:* *f64

---

##### `JobRunId`<sup>Required</sup> <a name="JobRunId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.property.jobRunId"></a>

```go
func JobRunId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference <a name="DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureLineageContextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.putJobContext">PutJobContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.resetJobContext">ResetJobContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.resetNotebookId">ResetNotebookId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJobContext` <a name="PutJobContext" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.putJobContext"></a>

```go
func PutJobContext(value DataDatabricksFeatureEngineeringFeatureLineageContextJobContext)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.putJobContext.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContext">DataDatabricksFeatureEngineeringFeatureLineageContextJobContext</a>

---

##### `ResetJobContext` <a name="ResetJobContext" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.resetJobContext"></a>

```go
func ResetJobContext()
```

##### `ResetNotebookId` <a name="ResetNotebookId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.resetNotebookId"></a>

```go
func ResetNotebookId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.property.jobContext">JobContext</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference">DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.property.jobContextInput">JobContextInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.property.notebookIdInput">NotebookIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.property.notebookId">NotebookId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContext">DataDatabricksFeatureEngineeringFeatureLineageContext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JobContext`<sup>Required</sup> <a name="JobContext" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.property.jobContext"></a>

```go
func JobContext() DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference">DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference</a>

---

##### `JobContextInput`<sup>Optional</sup> <a name="JobContextInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.property.jobContextInput"></a>

```go
func JobContextInput() interface{}
```

- *Type:* interface{}

---

##### `NotebookIdInput`<sup>Optional</sup> <a name="NotebookIdInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.property.notebookIdInput"></a>

```go
func NotebookIdInput() *f64
```

- *Type:* *f64

---

##### `NotebookId`<sup>Required</sup> <a name="NotebookId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.property.notebookId"></a>

```go
func NotebookId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksFeatureEngineeringFeatureLineageContext
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureLineageContext">DataDatabricksFeatureEngineeringFeatureLineageContext</a>

---


### DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference <a name="DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference <a name="DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resetDataframeSchema">ResetDataframeSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resetEntityColumns">ResetEntityColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resetFilterCondition">ResetFilterCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resetTimeseriesColumn">ResetTimeseriesColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resetTransformationSql">ResetTransformationSql</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataframeSchema` <a name="ResetDataframeSchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resetDataframeSchema"></a>

```go
func ResetDataframeSchema()
```

##### `ResetEntityColumns` <a name="ResetEntityColumns" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resetEntityColumns"></a>

```go
func ResetEntityColumns()
```

##### `ResetFilterCondition` <a name="ResetFilterCondition" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resetFilterCondition"></a>

```go
func ResetFilterCondition()
```

##### `ResetTimeseriesColumn` <a name="ResetTimeseriesColumn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resetTimeseriesColumn"></a>

```go
func ResetTimeseriesColumn()
```

##### `ResetTransformationSql` <a name="ResetTransformationSql" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resetTransformationSql"></a>

```go
func ResetTransformationSql()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.dataframeSchemaInput">DataframeSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.entityColumnsInput">EntityColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.filterConditionInput">FilterConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.fullNameInput">FullNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput">TimeseriesColumnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.transformationSqlInput">TransformationSqlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.dataframeSchema">DataframeSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.entityColumns">EntityColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.filterCondition">FilterCondition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.fullName">FullName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.timeseriesColumn">TimeseriesColumn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.transformationSql">TransformationSql</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataframeSchemaInput`<sup>Optional</sup> <a name="DataframeSchemaInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.dataframeSchemaInput"></a>

```go
func DataframeSchemaInput() *string
```

- *Type:* *string

---

##### `EntityColumnsInput`<sup>Optional</sup> <a name="EntityColumnsInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.entityColumnsInput"></a>

```go
func EntityColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FilterConditionInput`<sup>Optional</sup> <a name="FilterConditionInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.filterConditionInput"></a>

```go
func FilterConditionInput() *string
```

- *Type:* *string

---

##### `FullNameInput`<sup>Optional</sup> <a name="FullNameInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.fullNameInput"></a>

```go
func FullNameInput() *string
```

- *Type:* *string

---

##### `TimeseriesColumnInput`<sup>Optional</sup> <a name="TimeseriesColumnInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput"></a>

```go
func TimeseriesColumnInput() *string
```

- *Type:* *string

---

##### `TransformationSqlInput`<sup>Optional</sup> <a name="TransformationSqlInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.transformationSqlInput"></a>

```go
func TransformationSqlInput() *string
```

- *Type:* *string

---

##### `DataframeSchema`<sup>Required</sup> <a name="DataframeSchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.dataframeSchema"></a>

```go
func DataframeSchema() *string
```

- *Type:* *string

---

##### `EntityColumns`<sup>Required</sup> <a name="EntityColumns" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.entityColumns"></a>

```go
func EntityColumns() *[]*string
```

- *Type:* *[]*string

---

##### `FilterCondition`<sup>Required</sup> <a name="FilterCondition" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.filterCondition"></a>

```go
func FilterCondition() *string
```

- *Type:* *string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.fullName"></a>

```go
func FullName() *string
```

- *Type:* *string

---

##### `TimeseriesColumn`<sup>Required</sup> <a name="TimeseriesColumn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.timeseriesColumn"></a>

```go
func TimeseriesColumn() *string
```

- *Type:* *string

---

##### `TransformationSql`<sup>Required</sup> <a name="TransformationSql" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.transformationSql"></a>

```go
func TransformationSql() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList <a name="DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.get"></a>

```go
func Get(index *f64) DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference <a name="DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.variantExprPathInput">VariantExprPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.variantExprPath">VariantExprPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VariantExprPathInput`<sup>Optional</sup> <a name="VariantExprPathInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.variantExprPathInput"></a>

```go
func VariantExprPathInput() *string
```

- *Type:* *string

---

##### `VariantExprPath`<sup>Required</sup> <a name="VariantExprPath" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.variantExprPath"></a>

```go
func VariantExprPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference <a name="DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.putEntityColumnIdentifiers">PutEntityColumnIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.putTimeseriesColumnIdentifier">PutTimeseriesColumnIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.resetEntityColumnIdentifiers">ResetEntityColumnIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.resetFilterCondition">ResetFilterCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.resetTimeseriesColumnIdentifier">ResetTimeseriesColumnIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEntityColumnIdentifiers` <a name="PutEntityColumnIdentifiers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.putEntityColumnIdentifiers"></a>

```go
func PutEntityColumnIdentifiers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.putEntityColumnIdentifiers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeseriesColumnIdentifier` <a name="PutTimeseriesColumnIdentifier" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.putTimeseriesColumnIdentifier"></a>

```go
func PutTimeseriesColumnIdentifier(value DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.putTimeseriesColumnIdentifier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier">DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier</a>

---

##### `ResetEntityColumnIdentifiers` <a name="ResetEntityColumnIdentifiers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.resetEntityColumnIdentifiers"></a>

```go
func ResetEntityColumnIdentifiers()
```

##### `ResetFilterCondition` <a name="ResetFilterCondition" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.resetFilterCondition"></a>

```go
func ResetFilterCondition()
```

##### `ResetTimeseriesColumnIdentifier` <a name="ResetTimeseriesColumnIdentifier" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.resetTimeseriesColumnIdentifier"></a>

```go
func ResetTimeseriesColumnIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.entityColumnIdentifiers">EntityColumnIdentifiers</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList">DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.timeseriesColumnIdentifier">TimeseriesColumnIdentifier</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference">DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.entityColumnIdentifiersInput">EntityColumnIdentifiersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.filterConditionInput">FilterConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.timeseriesColumnIdentifierInput">TimeseriesColumnIdentifierInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.filterCondition">FilterCondition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntityColumnIdentifiers`<sup>Required</sup> <a name="EntityColumnIdentifiers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.entityColumnIdentifiers"></a>

```go
func EntityColumnIdentifiers() DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList">DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList</a>

---

##### `TimeseriesColumnIdentifier`<sup>Required</sup> <a name="TimeseriesColumnIdentifier" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.timeseriesColumnIdentifier"></a>

```go
func TimeseriesColumnIdentifier() DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference">DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference</a>

---

##### `EntityColumnIdentifiersInput`<sup>Optional</sup> <a name="EntityColumnIdentifiersInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.entityColumnIdentifiersInput"></a>

```go
func EntityColumnIdentifiersInput() interface{}
```

- *Type:* interface{}

---

##### `FilterConditionInput`<sup>Optional</sup> <a name="FilterConditionInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.filterConditionInput"></a>

```go
func FilterConditionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeseriesColumnIdentifierInput`<sup>Optional</sup> <a name="TimeseriesColumnIdentifierInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.timeseriesColumnIdentifierInput"></a>

```go
func TimeseriesColumnIdentifierInput() interface{}
```

- *Type:* interface{}

---

##### `FilterCondition`<sup>Required</sup> <a name="FilterCondition" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.filterCondition"></a>

```go
func FilterCondition() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference <a name="DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.variantExprPathInput">VariantExprPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.variantExprPath">VariantExprPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VariantExprPathInput`<sup>Optional</sup> <a name="VariantExprPathInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.variantExprPathInput"></a>

```go
func VariantExprPathInput() *string
```

- *Type:* *string

---

##### `VariantExprPath`<sup>Required</sup> <a name="VariantExprPath" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.variantExprPath"></a>

```go
func VariantExprPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureSourceOutputReference <a name="DataDatabricksFeatureEngineeringFeatureSourceOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.putDeltaTableSource">PutDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.putKafkaSource">PutKafkaSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.putRequestSource">PutRequestSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.resetDeltaTableSource">ResetDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.resetKafkaSource">ResetKafkaSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.resetRequestSource">ResetRequestSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeltaTableSource` <a name="PutDeltaTableSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.putDeltaTableSource"></a>

```go
func PutDeltaTableSource(value DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.putDeltaTableSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource">DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource</a>

---

##### `PutKafkaSource` <a name="PutKafkaSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.putKafkaSource"></a>

```go
func PutKafkaSource(value DataDatabricksFeatureEngineeringFeatureSourceKafkaSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.putKafkaSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSource">DataDatabricksFeatureEngineeringFeatureSourceKafkaSource</a>

---

##### `PutRequestSource` <a name="PutRequestSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.putRequestSource"></a>

```go
func PutRequestSource(value DataDatabricksFeatureEngineeringFeatureSourceRequestSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.putRequestSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSource">DataDatabricksFeatureEngineeringFeatureSourceRequestSource</a>

---

##### `ResetDeltaTableSource` <a name="ResetDeltaTableSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.resetDeltaTableSource"></a>

```go
func ResetDeltaTableSource()
```

##### `ResetKafkaSource` <a name="ResetKafkaSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.resetKafkaSource"></a>

```go
func ResetKafkaSource()
```

##### `ResetRequestSource` <a name="ResetRequestSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.resetRequestSource"></a>

```go
func ResetRequestSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.property.deltaTableSource">DeltaTableSource</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference">DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.property.kafkaSource">KafkaSource</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference">DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.property.requestSource">RequestSource</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference">DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.property.deltaTableSourceInput">DeltaTableSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.property.kafkaSourceInput">KafkaSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.property.requestSourceInput">RequestSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSource">DataDatabricksFeatureEngineeringFeatureSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeltaTableSource`<sup>Required</sup> <a name="DeltaTableSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.property.deltaTableSource"></a>

```go
func DeltaTableSource() DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference">DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference</a>

---

##### `KafkaSource`<sup>Required</sup> <a name="KafkaSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.property.kafkaSource"></a>

```go
func KafkaSource() DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference">DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference</a>

---

##### `RequestSource`<sup>Required</sup> <a name="RequestSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.property.requestSource"></a>

```go
func RequestSource() DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference">DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference</a>

---

##### `DeltaTableSourceInput`<sup>Optional</sup> <a name="DeltaTableSourceInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.property.deltaTableSourceInput"></a>

```go
func DeltaTableSourceInput() interface{}
```

- *Type:* interface{}

---

##### `KafkaSourceInput`<sup>Optional</sup> <a name="KafkaSourceInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.property.kafkaSourceInput"></a>

```go
func KafkaSourceInput() interface{}
```

- *Type:* interface{}

---

##### `RequestSourceInput`<sup>Optional</sup> <a name="RequestSourceInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.property.requestSourceInput"></a>

```go
func RequestSourceInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksFeatureEngineeringFeatureSource
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSource">DataDatabricksFeatureEngineeringFeatureSource</a>

---


### DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList <a name="DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.get"></a>

```go
func Get(index *f64) DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference <a name="DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.property.dataTypeInput">DataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields">DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.property.dataTypeInput"></a>

```go
func DataTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields">DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields</a>

---


### DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference <a name="DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.putFields">PutFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFields` <a name="PutFields" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.putFields"></a>

```go
func PutFields(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.putFields.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList">DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.property.fieldsInput">FieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.property.fields"></a>

```go
func Fields() DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList">DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList</a>

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.property.fieldsInput"></a>

```go
func FieldsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference <a name="DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.putFlatSchema">PutFlatSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.resetFlatSchema">ResetFlatSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFlatSchema` <a name="PutFlatSchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.putFlatSchema"></a>

```go
func PutFlatSchema(value DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchema)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.putFlatSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchema">DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchema</a>

---

##### `ResetFlatSchema` <a name="ResetFlatSchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.resetFlatSchema"></a>

```go
func ResetFlatSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.property.flatSchema">FlatSchema</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference">DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.property.flatSchemaInput">FlatSchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FlatSchema`<sup>Required</sup> <a name="FlatSchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.property.flatSchema"></a>

```go
func FlatSchema() DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference">DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference</a>

---

##### `FlatSchemaInput`<sup>Optional</sup> <a name="FlatSchemaInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.property.flatSchemaInput"></a>

```go
func FlatSchemaInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference <a name="DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumn">DataDatabricksFeatureEngineeringFeatureTimeseriesColumn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksFeatureEngineeringFeatureTimeseriesColumn
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeseriesColumn">DataDatabricksFeatureEngineeringFeatureTimeseriesColumn</a>

---


### DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference <a name="DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.resetOffset">ResetOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOffset` <a name="ResetOffset" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.resetOffset"></a>

```go
func ResetOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.offsetInput">OffsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.windowDurationInput">WindowDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.offset">Offset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.windowDuration">WindowDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OffsetInput`<sup>Optional</sup> <a name="OffsetInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.offsetInput"></a>

```go
func OffsetInput() *string
```

- *Type:* *string

---

##### `WindowDurationInput`<sup>Optional</sup> <a name="WindowDurationInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.windowDurationInput"></a>

```go
func WindowDurationInput() *string
```

- *Type:* *string

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.offset"></a>

```go
func Offset() *string
```

- *Type:* *string

---

##### `WindowDuration`<sup>Required</sup> <a name="WindowDuration" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.windowDuration"></a>

```go
func WindowDuration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference <a name="DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.putContinuous">PutContinuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.putSliding">PutSliding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.putTumbling">PutTumbling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.resetContinuous">ResetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.resetSliding">ResetSliding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.resetTumbling">ResetTumbling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContinuous` <a name="PutContinuous" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.putContinuous"></a>

```go
func PutContinuous(value DataDatabricksFeatureEngineeringFeatureTimeWindowContinuous)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.putContinuous.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuous">DataDatabricksFeatureEngineeringFeatureTimeWindowContinuous</a>

---

##### `PutSliding` <a name="PutSliding" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.putSliding"></a>

```go
func PutSliding(value DataDatabricksFeatureEngineeringFeatureTimeWindowSliding)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.putSliding.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSliding">DataDatabricksFeatureEngineeringFeatureTimeWindowSliding</a>

---

##### `PutTumbling` <a name="PutTumbling" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.putTumbling"></a>

```go
func PutTumbling(value DataDatabricksFeatureEngineeringFeatureTimeWindowTumbling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.putTumbling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumbling">DataDatabricksFeatureEngineeringFeatureTimeWindowTumbling</a>

---

##### `ResetContinuous` <a name="ResetContinuous" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.resetContinuous"></a>

```go
func ResetContinuous()
```

##### `ResetSliding` <a name="ResetSliding" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.resetSliding"></a>

```go
func ResetSliding()
```

##### `ResetTumbling` <a name="ResetTumbling" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.resetTumbling"></a>

```go
func ResetTumbling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.property.continuous">Continuous</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference">DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.property.sliding">Sliding</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference">DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.property.tumbling">Tumbling</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference">DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.property.continuousInput">ContinuousInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.property.slidingInput">SlidingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.property.tumblingInput">TumblingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindow">DataDatabricksFeatureEngineeringFeatureTimeWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Continuous`<sup>Required</sup> <a name="Continuous" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.property.continuous"></a>

```go
func Continuous() DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference">DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference</a>

---

##### `Sliding`<sup>Required</sup> <a name="Sliding" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.property.sliding"></a>

```go
func Sliding() DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference">DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference</a>

---

##### `Tumbling`<sup>Required</sup> <a name="Tumbling" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.property.tumbling"></a>

```go
func Tumbling() DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference">DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference</a>

---

##### `ContinuousInput`<sup>Optional</sup> <a name="ContinuousInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.property.continuousInput"></a>

```go
func ContinuousInput() interface{}
```

- *Type:* interface{}

---

##### `SlidingInput`<sup>Optional</sup> <a name="SlidingInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.property.slidingInput"></a>

```go
func SlidingInput() interface{}
```

- *Type:* interface{}

---

##### `TumblingInput`<sup>Optional</sup> <a name="TumblingInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.property.tumblingInput"></a>

```go
func TumblingInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksFeatureEngineeringFeatureTimeWindow
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindow">DataDatabricksFeatureEngineeringFeatureTimeWindow</a>

---


### DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference <a name="DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.slideDurationInput">SlideDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.windowDurationInput">WindowDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.slideDuration">SlideDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.windowDuration">WindowDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SlideDurationInput`<sup>Optional</sup> <a name="SlideDurationInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.slideDurationInput"></a>

```go
func SlideDurationInput() *string
```

- *Type:* *string

---

##### `WindowDurationInput`<sup>Optional</sup> <a name="WindowDurationInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.windowDurationInput"></a>

```go
func WindowDurationInput() *string
```

- *Type:* *string

---

##### `SlideDuration`<sup>Required</sup> <a name="SlideDuration" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.slideDuration"></a>

```go
func SlideDuration() *string
```

- *Type:* *string

---

##### `WindowDuration`<sup>Required</sup> <a name="WindowDuration" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.windowDuration"></a>

```go
func WindowDuration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference <a name="DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksfeatureengineeringfeature"

datadatabricksfeatureengineeringfeature.NewDataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.windowDurationInput">WindowDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.windowDuration">WindowDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WindowDurationInput`<sup>Optional</sup> <a name="WindowDurationInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.windowDurationInput"></a>

```go
func WindowDurationInput() *string
```

- *Type:* *string

---

##### `WindowDuration`<sup>Required</sup> <a name="WindowDuration" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.windowDuration"></a>

```go
func WindowDuration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringFeature.DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



