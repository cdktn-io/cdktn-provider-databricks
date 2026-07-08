# `dataDatabricksWarehousesDefaultWarehouseOverrides` Submodule <a name="`dataDatabricksWarehousesDefaultWarehouseOverrides` Submodule" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksWarehousesDefaultWarehouseOverrides <a name="DataDatabricksWarehousesDefaultWarehouseOverrides" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/warehouses_default_warehouse_overrides databricks_warehouses_default_warehouse_overrides}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickswarehousesdefaultwarehouseoverrides"

datadatabrickswarehousesdefaultwarehouseoverrides.NewDataDatabricksWarehousesDefaultWarehouseOverrides(scope Construct, id *string, config DataDatabricksWarehousesDefaultWarehouseOverridesConfig) DataDatabricksWarehousesDefaultWarehouseOverrides
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig">DataDatabricksWarehousesDefaultWarehouseOverridesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig">DataDatabricksWarehousesDefaultWarehouseOverridesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig</a>

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.resetPageSize"></a>

```go
func ResetPageSize()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksWarehousesDefaultWarehouseOverrides resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickswarehousesdefaultwarehouseoverrides"

datadatabrickswarehousesdefaultwarehouseoverrides.DataDatabricksWarehousesDefaultWarehouseOverrides_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickswarehousesdefaultwarehouseoverrides"

datadatabrickswarehousesdefaultwarehouseoverrides.DataDatabricksWarehousesDefaultWarehouseOverrides_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickswarehousesdefaultwarehouseoverrides"

datadatabrickswarehousesdefaultwarehouseoverrides.DataDatabricksWarehousesDefaultWarehouseOverrides_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickswarehousesdefaultwarehouseoverrides"

datadatabrickswarehousesdefaultwarehouseoverrides.DataDatabricksWarehousesDefaultWarehouseOverrides_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksWarehousesDefaultWarehouseOverrides resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksWarehousesDefaultWarehouseOverrides to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksWarehousesDefaultWarehouseOverrides that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/warehouses_default_warehouse_overrides#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksWarehousesDefaultWarehouseOverrides to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.defaultWarehouseOverrides">DefaultWarehouseOverrides</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.pageSizeInput">PageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.pageSize">PageSize</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `DefaultWarehouseOverrides`<sup>Required</sup> <a name="DefaultWarehouseOverrides" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.defaultWarehouseOverrides"></a>

```go
func DefaultWarehouseOverrides() DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.pageSizeInput"></a>

```go
func PageSizeInput() *f64
```

- *Type:* *f64

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.pageSize"></a>

```go
func PageSize() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksWarehousesDefaultWarehouseOverridesConfig <a name="DataDatabricksWarehousesDefaultWarehouseOverridesConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickswarehousesdefaultwarehouseoverrides"

&datadatabrickswarehousesdefaultwarehouseoverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	PageSize: *f64,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.pageSize">PageSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/warehouses_default_warehouse_overrides#page_size DataDatabricksWarehousesDefaultWarehouseOverrides#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/warehouses_default_warehouse_overrides#provider_config DataDatabricksWarehousesDefaultWarehouseOverrides#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.pageSize"></a>

```go
PageSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/warehouses_default_warehouse_overrides#page_size DataDatabricksWarehousesDefaultWarehouseOverrides#page_size}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/warehouses_default_warehouse_overrides#provider_config DataDatabricksWarehousesDefaultWarehouseOverrides#provider_config}.

---

### DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides <a name="DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickswarehousesdefaultwarehouseoverrides"

&datadatabrickswarehousesdefaultwarehouseoverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides {
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/warehouses_default_warehouse_overrides#name DataDatabricksWarehousesDefaultWarehouseOverrides#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/warehouses_default_warehouse_overrides#provider_config DataDatabricksWarehousesDefaultWarehouseOverrides#provider_config}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/warehouses_default_warehouse_overrides#name DataDatabricksWarehousesDefaultWarehouseOverrides#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/warehouses_default_warehouse_overrides#provider_config DataDatabricksWarehousesDefaultWarehouseOverrides#provider_config}.

---

### DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig <a name="DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickswarehousesdefaultwarehouseoverrides"

&datadatabrickswarehousesdefaultwarehouseoverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/warehouses_default_warehouse_overrides#workspace_id DataDatabricksWarehousesDefaultWarehouseOverrides#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/warehouses_default_warehouse_overrides#workspace_id DataDatabricksWarehousesDefaultWarehouseOverrides#workspace_id}.

---

### DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig <a name="DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickswarehousesdefaultwarehouseoverrides"

&datadatabrickswarehousesdefaultwarehouseoverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/warehouses_default_warehouse_overrides#workspace_id DataDatabricksWarehousesDefaultWarehouseOverrides#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/warehouses_default_warehouse_overrides#workspace_id DataDatabricksWarehousesDefaultWarehouseOverrides#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList <a name="DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickswarehousesdefaultwarehouseoverrides"

datadatabrickswarehousesdefaultwarehouseoverrides.NewDataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.get"></a>

```go
func Get(index *f64) DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference <a name="DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickswarehousesdefaultwarehouseoverrides"

datadatabrickswarehousesdefaultwarehouseoverrides.NewDataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.defaultWarehouseOverrideId">DefaultWarehouseOverrideId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.warehouseId">WarehouseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultWarehouseOverrideId`<sup>Required</sup> <a name="DefaultWarehouseOverrideId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.defaultWarehouseOverrideId"></a>

```go
func DefaultWarehouseOverrideId() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.warehouseId"></a>

```go
func WarehouseId() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides</a>

---


### DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference <a name="DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickswarehousesdefaultwarehouseoverrides"

datadatabrickswarehousesdefaultwarehouseoverrides.NewDataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference <a name="DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickswarehousesdefaultwarehouseoverrides"

datadatabrickswarehousesdefaultwarehouseoverrides.NewDataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



