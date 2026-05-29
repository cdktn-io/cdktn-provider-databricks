# `dataDatabricksDisasterRecoveryStableUrls` Submodule <a name="`dataDatabricksDisasterRecoveryStableUrls` Submodule" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDisasterRecoveryStableUrls <a name="DataDatabricksDisasterRecoveryStableUrls" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/disaster_recovery_stable_urls databricks_disaster_recovery_stable_urls}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdisasterrecoverystableurls"

datadatabricksdisasterrecoverystableurls.NewDataDatabricksDisasterRecoveryStableUrls(scope Construct, id *string, config DataDatabricksDisasterRecoveryStableUrlsConfig) DataDatabricksDisasterRecoveryStableUrls
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig">DataDatabricksDisasterRecoveryStableUrlsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig">DataDatabricksDisasterRecoveryStableUrlsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.resetPageSize">ResetPageSize</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.resetPageSize"></a>

```go
func ResetPageSize()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksDisasterRecoveryStableUrls resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdisasterrecoverystableurls"

datadatabricksdisasterrecoverystableurls.DataDatabricksDisasterRecoveryStableUrls_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdisasterrecoverystableurls"

datadatabricksdisasterrecoverystableurls.DataDatabricksDisasterRecoveryStableUrls_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdisasterrecoverystableurls"

datadatabricksdisasterrecoverystableurls.DataDatabricksDisasterRecoveryStableUrls_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdisasterrecoverystableurls"

datadatabricksdisasterrecoverystableurls.DataDatabricksDisasterRecoveryStableUrls_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksDisasterRecoveryStableUrls resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksDisasterRecoveryStableUrls to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksDisasterRecoveryStableUrls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/disaster_recovery_stable_urls#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksDisasterRecoveryStableUrls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.stableUrls">StableUrls</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList">DataDatabricksDisasterRecoveryStableUrlsStableUrlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.pageSizeInput">PageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.pageSize">PageSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `StableUrls`<sup>Required</sup> <a name="StableUrls" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.stableUrls"></a>

```go
func StableUrls() DataDatabricksDisasterRecoveryStableUrlsStableUrlsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList">DataDatabricksDisasterRecoveryStableUrlsStableUrlsList</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.pageSizeInput"></a>

```go
func PageSizeInput() *f64
```

- *Type:* *f64

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.pageSize"></a>

```go
func PageSize() *f64
```

- *Type:* *f64

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDisasterRecoveryStableUrlsConfig <a name="DataDatabricksDisasterRecoveryStableUrlsConfig" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdisasterrecoverystableurls"

&datadatabricksdisasterrecoverystableurls.DataDatabricksDisasterRecoveryStableUrlsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Parent: *string,
	PageSize: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.parent">Parent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/disaster_recovery_stable_urls#parent DataDatabricksDisasterRecoveryStableUrls#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.pageSize">PageSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/disaster_recovery_stable_urls#page_size DataDatabricksDisasterRecoveryStableUrls#page_size}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/disaster_recovery_stable_urls#parent DataDatabricksDisasterRecoveryStableUrls#parent}.

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.pageSize"></a>

```go
PageSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/disaster_recovery_stable_urls#page_size DataDatabricksDisasterRecoveryStableUrls#page_size}.

---

### DataDatabricksDisasterRecoveryStableUrlsStableUrls <a name="DataDatabricksDisasterRecoveryStableUrlsStableUrls" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrls.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdisasterrecoverystableurls"

&datadatabricksdisasterrecoverystableurls.DataDatabricksDisasterRecoveryStableUrlsStableUrls {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrls.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/disaster_recovery_stable_urls#name DataDatabricksDisasterRecoveryStableUrls#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrls.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/disaster_recovery_stable_urls#name DataDatabricksDisasterRecoveryStableUrls#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDisasterRecoveryStableUrlsStableUrlsList <a name="DataDatabricksDisasterRecoveryStableUrlsStableUrlsList" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdisasterrecoverystableurls"

datadatabricksdisasterrecoverystableurls.NewDataDatabricksDisasterRecoveryStableUrlsStableUrlsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksDisasterRecoveryStableUrlsStableUrlsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.get"></a>

```go
func Get(index *f64) DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference <a name="DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksdisasterrecoverystableurls"

datadatabricksdisasterrecoverystableurls.NewDataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.failoverGroupName">FailoverGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.initialWorkspaceId">InitialWorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrls">DataDatabricksDisasterRecoveryStableUrlsStableUrls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FailoverGroupName`<sup>Required</sup> <a name="FailoverGroupName" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.failoverGroupName"></a>

```go
func FailoverGroupName() *string
```

- *Type:* *string

---

##### `InitialWorkspaceId`<sup>Required</sup> <a name="InitialWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.initialWorkspaceId"></a>

```go
func InitialWorkspaceId() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksDisasterRecoveryStableUrlsStableUrls
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrls">DataDatabricksDisasterRecoveryStableUrlsStableUrls</a>

---



