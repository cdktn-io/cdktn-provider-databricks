# `dataDatabricksMaterializedFeaturesFeatureTags` Submodule <a name="`dataDatabricksMaterializedFeaturesFeatureTags` Submodule" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMaterializedFeaturesFeatureTags <a name="DataDatabricksMaterializedFeaturesFeatureTags" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/materialized_features_feature_tags databricks_materialized_features_feature_tags}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksmaterializedfeaturesfeaturetags"

datadatabricksmaterializedfeaturesfeaturetags.NewDataDatabricksMaterializedFeaturesFeatureTags(scope Construct, id *string, config DataDatabricksMaterializedFeaturesFeatureTagsConfig) DataDatabricksMaterializedFeaturesFeatureTags
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig">DataDatabricksMaterializedFeaturesFeatureTagsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig">DataDatabricksMaterializedFeaturesFeatureTagsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig</a>

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.resetPageSize"></a>

```go
func ResetPageSize()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksMaterializedFeaturesFeatureTags resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksmaterializedfeaturesfeaturetags"

datadatabricksmaterializedfeaturesfeaturetags.DataDatabricksMaterializedFeaturesFeatureTags_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksmaterializedfeaturesfeaturetags"

datadatabricksmaterializedfeaturesfeaturetags.DataDatabricksMaterializedFeaturesFeatureTags_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksmaterializedfeaturesfeaturetags"

datadatabricksmaterializedfeaturesfeaturetags.DataDatabricksMaterializedFeaturesFeatureTags_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksmaterializedfeaturesfeaturetags"

datadatabricksmaterializedfeaturesfeaturetags.DataDatabricksMaterializedFeaturesFeatureTags_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksMaterializedFeaturesFeatureTags resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksMaterializedFeaturesFeatureTags to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksMaterializedFeaturesFeatureTags that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/materialized_features_feature_tags#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksMaterializedFeaturesFeatureTags to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.featureTags">FeatureTags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference">DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.featureNameInput">FeatureNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.pageSizeInput">PageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.featureName">FeatureName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.pageSize">PageSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `FeatureTags`<sup>Required</sup> <a name="FeatureTags" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.featureTags"></a>

```go
func FeatureTags() DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference">DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference</a>

---

##### `FeatureNameInput`<sup>Optional</sup> <a name="FeatureNameInput" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.featureNameInput"></a>

```go
func FeatureNameInput() *string
```

- *Type:* *string

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.pageSizeInput"></a>

```go
func PageSizeInput() *f64
```

- *Type:* *f64

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `FeatureName`<sup>Required</sup> <a name="FeatureName" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.featureName"></a>

```go
func FeatureName() *string
```

- *Type:* *string

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.pageSize"></a>

```go
func PageSize() *f64
```

- *Type:* *f64

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMaterializedFeaturesFeatureTagsConfig <a name="DataDatabricksMaterializedFeaturesFeatureTagsConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksmaterializedfeaturesfeaturetags"

&datadatabricksmaterializedfeaturesfeaturetags.DataDatabricksMaterializedFeaturesFeatureTagsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	FeatureName: *string,
	TableName: *string,
	PageSize: *f64,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.featureName">FeatureName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/materialized_features_feature_tags#feature_name DataDatabricksMaterializedFeaturesFeatureTags#feature_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/materialized_features_feature_tags#table_name DataDatabricksMaterializedFeaturesFeatureTags#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.pageSize">PageSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/materialized_features_feature_tags#page_size DataDatabricksMaterializedFeaturesFeatureTags#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/materialized_features_feature_tags#provider_config DataDatabricksMaterializedFeaturesFeatureTags#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FeatureName`<sup>Required</sup> <a name="FeatureName" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.featureName"></a>

```go
FeatureName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/materialized_features_feature_tags#feature_name DataDatabricksMaterializedFeaturesFeatureTags#feature_name}.

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/materialized_features_feature_tags#table_name DataDatabricksMaterializedFeaturesFeatureTags#table_name}.

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.pageSize"></a>

```go
PageSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/materialized_features_feature_tags#page_size DataDatabricksMaterializedFeaturesFeatureTags#page_size}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/materialized_features_feature_tags#provider_config DataDatabricksMaterializedFeaturesFeatureTags#provider_config}.

---

### DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags <a name="DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksmaterializedfeaturesfeaturetags"

&datadatabricksmaterializedfeaturesfeaturetags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags {
	Key: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/materialized_features_feature_tags#key DataDatabricksMaterializedFeaturesFeatureTags#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/materialized_features_feature_tags#provider_config DataDatabricksMaterializedFeaturesFeatureTags#provider_config}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/materialized_features_feature_tags#key DataDatabricksMaterializedFeaturesFeatureTags#key}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/materialized_features_feature_tags#provider_config DataDatabricksMaterializedFeaturesFeatureTags#provider_config}.

---

### DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig <a name="DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksmaterializedfeaturesfeaturetags"

&datadatabricksmaterializedfeaturesfeaturetags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/materialized_features_feature_tags#workspace_id DataDatabricksMaterializedFeaturesFeatureTags#workspace_id}. |

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/materialized_features_feature_tags#workspace_id DataDatabricksMaterializedFeaturesFeatureTags#workspace_id}.

---

### DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig <a name="DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksmaterializedfeaturesfeaturetags"

&datadatabricksmaterializedfeaturesfeaturetags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/materialized_features_feature_tags#workspace_id DataDatabricksMaterializedFeaturesFeatureTags#workspace_id}. |

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/materialized_features_feature_tags#workspace_id DataDatabricksMaterializedFeaturesFeatureTags#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList <a name="DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksmaterializedfeaturesfeaturetags"

datadatabricksmaterializedfeaturesfeaturetags.NewDataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.get"></a>

```go
func Get(index *f64) DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference <a name="DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksmaterializedfeaturesfeaturetags"

datadatabricksmaterializedfeaturesfeaturetags.NewDataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference</a>

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags</a>

---


### DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference <a name="DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksmaterializedfeaturesfeaturetags"

datadatabricksmaterializedfeaturesfeaturetags.NewDataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference <a name="DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksmaterializedfeaturesfeaturetags"

datadatabricksmaterializedfeaturesfeaturetags.NewDataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



