# `dataDatabricksPostgresSnapshotSchedule` Submodule <a name="`dataDatabricksPostgresSnapshotSchedule` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresSnapshotSchedule <a name="DataDatabricksPostgresSnapshotSchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule databricks_postgres_snapshot_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgressnapshotschedule"

datadatabrickspostgressnapshotschedule.NewDataDatabricksPostgresSnapshotSchedule(scope Construct, id *string, config DataDatabricksPostgresSnapshotScheduleConfig) DataDatabricksPostgresSnapshotSchedule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig">DataDatabricksPostgresSnapshotScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig">DataDatabricksPostgresSnapshotScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksPostgresSnapshotScheduleProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig">DataDatabricksPostgresSnapshotScheduleProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresSnapshotSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgressnapshotschedule"

datadatabrickspostgressnapshotschedule.DataDatabricksPostgresSnapshotSchedule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgressnapshotschedule"

datadatabrickspostgressnapshotschedule.DataDatabricksPostgresSnapshotSchedule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgressnapshotschedule"

datadatabrickspostgressnapshotschedule.DataDatabricksPostgresSnapshotSchedule_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgressnapshotschedule"

datadatabrickspostgressnapshotschedule.DataDatabricksPostgresSnapshotSchedule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksPostgresSnapshotSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksPostgresSnapshotSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksPostgresSnapshotSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresSnapshotSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference">DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList">DataDatabricksPostgresSnapshotScheduleScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference">DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.schedule"></a>

```go
func Schedule() DataDatabricksPostgresSnapshotScheduleScheduleList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList">DataDatabricksPostgresSnapshotScheduleScheduleList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresSnapshotScheduleConfig <a name="DataDatabricksPostgresSnapshotScheduleConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgressnapshotschedule"

&datadatabrickspostgressnapshotschedule.DataDatabricksPostgresSnapshotScheduleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#name DataDatabricksPostgresSnapshotSchedule#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig">DataDatabricksPostgresSnapshotScheduleProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#provider_config DataDatabricksPostgresSnapshotSchedule#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#name DataDatabricksPostgresSnapshotSchedule#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksPostgresSnapshotScheduleProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig">DataDatabricksPostgresSnapshotScheduleProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#provider_config DataDatabricksPostgresSnapshotSchedule#provider_config}.

---

### DataDatabricksPostgresSnapshotScheduleProviderConfig <a name="DataDatabricksPostgresSnapshotScheduleProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgressnapshotschedule"

&datadatabrickspostgressnapshotschedule.DataDatabricksPostgresSnapshotScheduleProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#workspace_id DataDatabricksPostgresSnapshotSchedule#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#workspace_id DataDatabricksPostgresSnapshotSchedule#workspace_id}.

---

### DataDatabricksPostgresSnapshotScheduleSchedule <a name="DataDatabricksPostgresSnapshotScheduleSchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgressnapshotschedule"

&datadatabrickspostgressnapshotschedule.DataDatabricksPostgresSnapshotScheduleSchedule {
	Retention: *string,
	DailySchedule: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule,
	MonthlySchedule: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule,
	WeeklySchedule: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule.property.retention">Retention</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#retention DataDatabricksPostgresSnapshotSchedule#retention}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule.property.dailySchedule">DailySchedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule">DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#daily_schedule DataDatabricksPostgresSnapshotSchedule#daily_schedule}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule.property.monthlySchedule">MonthlySchedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule">DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#monthly_schedule DataDatabricksPostgresSnapshotSchedule#monthly_schedule}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule.property.weeklySchedule">WeeklySchedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule">DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#weekly_schedule DataDatabricksPostgresSnapshotSchedule#weekly_schedule}. |

---

##### `Retention`<sup>Required</sup> <a name="Retention" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule.property.retention"></a>

```go
Retention *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#retention DataDatabricksPostgresSnapshotSchedule#retention}.

---

##### `DailySchedule`<sup>Optional</sup> <a name="DailySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule.property.dailySchedule"></a>

```go
DailySchedule DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule">DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#daily_schedule DataDatabricksPostgresSnapshotSchedule#daily_schedule}.

---

##### `MonthlySchedule`<sup>Optional</sup> <a name="MonthlySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule.property.monthlySchedule"></a>

```go
MonthlySchedule DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule">DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#monthly_schedule DataDatabricksPostgresSnapshotSchedule#monthly_schedule}.

---

##### `WeeklySchedule`<sup>Optional</sup> <a name="WeeklySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule.property.weeklySchedule"></a>

```go
WeeklySchedule DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule">DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#weekly_schedule DataDatabricksPostgresSnapshotSchedule#weekly_schedule}.

---

### DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule <a name="DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgressnapshotschedule"

&datadatabrickspostgressnapshotschedule.DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule {
	Hour: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule.property.hour">Hour</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#hour DataDatabricksPostgresSnapshotSchedule#hour}. |

---

##### `Hour`<sup>Optional</sup> <a name="Hour" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule.property.hour"></a>

```go
Hour *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#hour DataDatabricksPostgresSnapshotSchedule#hour}.

---

### DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule <a name="DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgressnapshotschedule"

&datadatabrickspostgressnapshotschedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule {
	Day: *f64,
	Hour: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule.property.day">Day</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#day DataDatabricksPostgresSnapshotSchedule#day}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule.property.hour">Hour</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#hour DataDatabricksPostgresSnapshotSchedule#hour}. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule.property.day"></a>

```go
Day *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#day DataDatabricksPostgresSnapshotSchedule#day}.

---

##### `Hour`<sup>Optional</sup> <a name="Hour" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule.property.hour"></a>

```go
Hour *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#hour DataDatabricksPostgresSnapshotSchedule#hour}.

---

### DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule <a name="DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgressnapshotschedule"

&datadatabrickspostgressnapshotschedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule {
	DayOfWeek: *string,
	Hour: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#day_of_week DataDatabricksPostgresSnapshotSchedule#day_of_week}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule.property.hour">Hour</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#hour DataDatabricksPostgresSnapshotSchedule#hour}. |

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule.property.dayOfWeek"></a>

```go
DayOfWeek *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#day_of_week DataDatabricksPostgresSnapshotSchedule#day_of_week}.

---

##### `Hour`<sup>Optional</sup> <a name="Hour" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule.property.hour"></a>

```go
Hour *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/postgres_snapshot_schedule#hour DataDatabricksPostgresSnapshotSchedule#hour}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference <a name="DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgressnapshotschedule"

datadatabrickspostgressnapshotschedule.NewDataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference <a name="DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgressnapshotschedule"

datadatabrickspostgressnapshotschedule.NewDataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resetHour">ResetHour</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHour` <a name="ResetHour" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resetHour"></a>

```go
func ResetHour()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.hourInput">HourInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.hour">Hour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HourInput`<sup>Optional</sup> <a name="HourInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.hourInput"></a>

```go
func HourInput() *f64
```

- *Type:* *f64

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.hour"></a>

```go
func Hour() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPostgresSnapshotScheduleScheduleList <a name="DataDatabricksPostgresSnapshotScheduleScheduleList" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgressnapshotschedule"

datadatabrickspostgressnapshotschedule.NewDataDatabricksPostgresSnapshotScheduleScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksPostgresSnapshotScheduleScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.get"></a>

```go
func Get(index *f64) DataDatabricksPostgresSnapshotScheduleScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference <a name="DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgressnapshotschedule"

datadatabrickspostgressnapshotschedule.NewDataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resetHour">ResetHour</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHour` <a name="ResetHour" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resetHour"></a>

```go
func ResetHour()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.dayInput">DayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.hourInput">HourInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.day">Day</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.hour">Hour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.dayInput"></a>

```go
func DayInput() *f64
```

- *Type:* *f64

---

##### `HourInput`<sup>Optional</sup> <a name="HourInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.hourInput"></a>

```go
func HourInput() *f64
```

- *Type:* *f64

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.day"></a>

```go
func Day() *f64
```

- *Type:* *f64

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.hour"></a>

```go
func Hour() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPostgresSnapshotScheduleScheduleOutputReference <a name="DataDatabricksPostgresSnapshotScheduleScheduleOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgressnapshotschedule"

datadatabrickspostgressnapshotschedule.NewDataDatabricksPostgresSnapshotScheduleScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksPostgresSnapshotScheduleScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.putDailySchedule">PutDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.putMonthlySchedule">PutMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.putWeeklySchedule">PutWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.resetDailySchedule">ResetDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.resetMonthlySchedule">ResetMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.resetWeeklySchedule">ResetWeeklySchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDailySchedule` <a name="PutDailySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.putDailySchedule"></a>

```go
func PutDailySchedule(value DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.putDailySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule">DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule</a>

---

##### `PutMonthlySchedule` <a name="PutMonthlySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.putMonthlySchedule"></a>

```go
func PutMonthlySchedule(value DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.putMonthlySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule">DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule</a>

---

##### `PutWeeklySchedule` <a name="PutWeeklySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.putWeeklySchedule"></a>

```go
func PutWeeklySchedule(value DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.putWeeklySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule">DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule</a>

---

##### `ResetDailySchedule` <a name="ResetDailySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.resetDailySchedule"></a>

```go
func ResetDailySchedule()
```

##### `ResetMonthlySchedule` <a name="ResetMonthlySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.resetMonthlySchedule"></a>

```go
func ResetMonthlySchedule()
```

##### `ResetWeeklySchedule` <a name="ResetWeeklySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.resetWeeklySchedule"></a>

```go
func ResetWeeklySchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.dailySchedule">DailySchedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference">DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.monthlySchedule">MonthlySchedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference">DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.weeklySchedule">WeeklySchedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference">DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.dailyScheduleInput">DailyScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.monthlyScheduleInput">MonthlyScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.retentionInput">RetentionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.weeklyScheduleInput">WeeklyScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.retention">Retention</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule">DataDatabricksPostgresSnapshotScheduleSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DailySchedule`<sup>Required</sup> <a name="DailySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.dailySchedule"></a>

```go
func DailySchedule() DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference">DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference</a>

---

##### `MonthlySchedule`<sup>Required</sup> <a name="MonthlySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.monthlySchedule"></a>

```go
func MonthlySchedule() DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference">DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference</a>

---

##### `WeeklySchedule`<sup>Required</sup> <a name="WeeklySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.weeklySchedule"></a>

```go
func WeeklySchedule() DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference">DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference</a>

---

##### `DailyScheduleInput`<sup>Optional</sup> <a name="DailyScheduleInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.dailyScheduleInput"></a>

```go
func DailyScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `MonthlyScheduleInput`<sup>Optional</sup> <a name="MonthlyScheduleInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.monthlyScheduleInput"></a>

```go
func MonthlyScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `RetentionInput`<sup>Optional</sup> <a name="RetentionInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.retentionInput"></a>

```go
func RetentionInput() *string
```

- *Type:* *string

---

##### `WeeklyScheduleInput`<sup>Optional</sup> <a name="WeeklyScheduleInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.weeklyScheduleInput"></a>

```go
func WeeklyScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `Retention`<sup>Required</sup> <a name="Retention" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.retention"></a>

```go
func Retention() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPostgresSnapshotScheduleSchedule
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule">DataDatabricksPostgresSnapshotScheduleSchedule</a>

---


### DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference <a name="DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgressnapshotschedule"

datadatabrickspostgressnapshotschedule.NewDataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resetHour">ResetHour</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHour` <a name="ResetHour" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resetHour"></a>

```go
func ResetHour()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.hourInput">HourInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.hour">Hour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.dayOfWeekInput"></a>

```go
func DayOfWeekInput() *string
```

- *Type:* *string

---

##### `HourInput`<sup>Optional</sup> <a name="HourInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.hourInput"></a>

```go
func HourInput() *f64
```

- *Type:* *f64

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.dayOfWeek"></a>

```go
func DayOfWeek() *string
```

- *Type:* *string

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.hour"></a>

```go
func Hour() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



