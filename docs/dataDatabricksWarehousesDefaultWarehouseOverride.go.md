# `dataDatabricksWarehousesDefaultWarehouseOverride` Submodule <a name="`dataDatabricksWarehousesDefaultWarehouseOverride` Submodule" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksWarehousesDefaultWarehouseOverride <a name="DataDatabricksWarehousesDefaultWarehouseOverride" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/warehouses_default_warehouse_override databricks_warehouses_default_warehouse_override}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickswarehousesdefaultwarehouseoverride"

datadatabrickswarehousesdefaultwarehouseoverride.NewDataDatabricksWarehousesDefaultWarehouseOverride(scope Construct, id *string, config DataDatabricksWarehousesDefaultWarehouseOverrideConfig) DataDatabricksWarehousesDefaultWarehouseOverride
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig">DataDatabricksWarehousesDefaultWarehouseOverrideConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig">DataDatabricksWarehousesDefaultWarehouseOverrideConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksWarehousesDefaultWarehouseOverride resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickswarehousesdefaultwarehouseoverride"

datadatabrickswarehousesdefaultwarehouseoverride.DataDatabricksWarehousesDefaultWarehouseOverride_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickswarehousesdefaultwarehouseoverride"

datadatabrickswarehousesdefaultwarehouseoverride.DataDatabricksWarehousesDefaultWarehouseOverride_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickswarehousesdefaultwarehouseoverride"

datadatabrickswarehousesdefaultwarehouseoverride.DataDatabricksWarehousesDefaultWarehouseOverride_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickswarehousesdefaultwarehouseoverride"

datadatabrickswarehousesdefaultwarehouseoverride.DataDatabricksWarehousesDefaultWarehouseOverride_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksWarehousesDefaultWarehouseOverride resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksWarehousesDefaultWarehouseOverride to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksWarehousesDefaultWarehouseOverride that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/warehouses_default_warehouse_override#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksWarehousesDefaultWarehouseOverride to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.defaultWarehouseOverrideId">DefaultWarehouseOverrideId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference">DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.warehouseId">WarehouseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `DefaultWarehouseOverrideId`<sup>Required</sup> <a name="DefaultWarehouseOverrideId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.defaultWarehouseOverrideId"></a>

```go
func DefaultWarehouseOverrideId() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference">DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.warehouseId"></a>

```go
func WarehouseId() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksWarehousesDefaultWarehouseOverrideConfig <a name="DataDatabricksWarehousesDefaultWarehouseOverrideConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickswarehousesdefaultwarehouseoverride"

&datadatabrickswarehousesdefaultwarehouseoverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/warehouses_default_warehouse_override#name DataDatabricksWarehousesDefaultWarehouseOverride#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/warehouses_default_warehouse_override#provider_config DataDatabricksWarehousesDefaultWarehouseOverride#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/warehouses_default_warehouse_override#name DataDatabricksWarehousesDefaultWarehouseOverride#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/warehouses_default_warehouse_override#provider_config DataDatabricksWarehousesDefaultWarehouseOverride#provider_config}.

---

### DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig <a name="DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickswarehousesdefaultwarehouseoverride"

&datadatabrickswarehousesdefaultwarehouseoverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/warehouses_default_warehouse_override#workspace_id DataDatabricksWarehousesDefaultWarehouseOverride#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/warehouses_default_warehouse_override#workspace_id DataDatabricksWarehousesDefaultWarehouseOverride#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference <a name="DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickswarehousesdefaultwarehouseoverride"

datadatabrickswarehousesdefaultwarehouseoverride.NewDataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



